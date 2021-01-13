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

export type Order = {
  title: string;
  bookingDate: number;
  address: Address;
  customer: Customer;
}

export type Address = {
  country: string;
  city: string;
  street: string;
  zip?: string;
};

export type Customer = {
  name: string;
  email: string;
  phone: string;
}

export type OrderUpdateFields = {
  title: string;
  bookingDate: number;
}