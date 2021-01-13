import { 
  createJWT,
  getNumericDateJWT,
  encodeUrl
} from './deps.ts';

export type ServiceAccountKey = {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
};

export type GoogleAuthToken = {
  access_token: string;
  token_type?: string;
  expires_in?: string;
  scope?: string;
};

const createJWTForGoogleAPIs = async (serviceAccountKey: ServiceAccountKey): Promise<string> => {
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
};

export const getGoogleAuthToken = async (): Promise<GoogleAuthToken> => {
  // Read service account file
  const serviceAccountRaw = await Deno.readTextFile('serviceAccountKey.json');
  const serviceAccountKey: ServiceAccountKey = JSON.parse(serviceAccountRaw);

  const jwt: string = await createJWTForGoogleAPIs(serviceAccountKey);
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
};