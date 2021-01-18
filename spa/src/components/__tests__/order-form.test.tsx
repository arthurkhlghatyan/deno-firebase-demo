import React from 'react';
import { render } from '@testing-library/react';
import OrderForm from '../order-form';
import type { Order, OrderUpdateFields } from '../../types';

test('Ensure OrderForm renders properly', () => {

  const order: Order = {
    title: 'Basic Order',
    bookingDate: Date.now(),
    address: {
      city: 'Berlin',
      country: 'Germany',
      street: 'Some street address',
      zip: '00000'
    },
    customer: {
      email: 'arthur.khlghatyan@gmail.com',
      name: 'Arthur Khlghatyan',
      phone: '+37411111111'
    }
  }

  const { getByPlaceholderText } = render(
    <OrderForm
      order={order}
      orderId="1234"
      isLoading={false}
      isFailed={false}
      onOrderUpdate={(orderId: string, fields: OrderUpdateFields) => {}}
    />
  );

  expect(getByPlaceholderText('Order Title')).toBeInTheDocument();
  expect(getByPlaceholderText('Booking Date')).toBeInTheDocument();
});