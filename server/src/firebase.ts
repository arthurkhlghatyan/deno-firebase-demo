class Client {
  token: string;
  baseUri: string;

  constructor(token: string, project_id: string) {
    this.token = token;
    this.baseUri = `https://${project_id}.firebaseio.com`;
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

export { Client };