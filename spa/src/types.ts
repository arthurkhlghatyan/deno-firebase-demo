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