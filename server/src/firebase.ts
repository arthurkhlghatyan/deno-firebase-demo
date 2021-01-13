import {
  createJWT,
  getNumericDateJWT,
  encodeUrl
} from './deps.ts';

import type { ServiceAccountKey, GoogleAuthToken } from './types.ts';

class Client {
  token: string;
  baseUri: string;

  constructor(token: string, projectId: string) {
    this.token = token;
    this.baseUri = `https://${projectId}.firebaseio.com`;
  }

  async baseReq<K, T>(
    path: string,
    method: string,
    body?: T
  ): Promise<K> {
    const options: RequestInit = {
      method
    };
  
    if (typeof body !== 'undefined') {
      options.body = JSON.stringify(body);
    }
    
    const finalUri = `${this.baseUri}${path}.json?access_token=${this.token}`;
    const res = await fetch(finalUri, options);
    const data = await res.json();
  
    return data;
  };
}

const createSignedJWT = async (serviceAccountKey: ServiceAccountKey): Promise<string> => {
  const iat = getNumericDateJWT(new Date());

  const jwt = await createJWT({
    alg: 'RS256',
    typ: 'JWT'
  }, {
    iss: serviceAccountKey.client_email,
    aud: serviceAccountKey.token_uri,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/firebase.database'
    ].join(' '),
    iat,
    exp: iat + 60 * 60,
  }, serviceAccountKey.private_key);

  return jwt;
}

const retrieveGoogleAuthToken = async (
  jwt: string,
  serviceAccountKey: ServiceAccountKey
): Promise<GoogleAuthToken> => {
  const rawBody = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`;
  const res = await fetch(serviceAccountKey.token_uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeUrl(rawBody)
  });

  const data = await res.json();

  return data;
}

const getConfiguredClient = async (projectId: string): Promise<Client> => {
  // Read service account file
  const serviceAccountRaw = await Deno.readTextFile('serviceAccountKey.json');
  const serviceAccountKey: ServiceAccountKey = JSON.parse(serviceAccountRaw);
  
  // Generate jwt and retrieve auth token
  console.log('Retrieving Google oAuth token...');
  const jwt: string = await createSignedJWT(serviceAccountKey);
  const token: GoogleAuthToken = await retrieveGoogleAuthToken(jwt, serviceAccountKey);
  console.log('Done...');

  return new Client(token.access_token, projectId);
};

export { Client, getConfiguredClient };