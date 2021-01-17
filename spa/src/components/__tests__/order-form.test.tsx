import React from 'react';
import { render } from '@testing-library/react';
import OrderForm from '../order-form';
import type { OrderUpdateFields } from '../../types';

test('Ensure OrderForm renders properly', () => {

  const onSignIn = (email: string, password: string) => {};

  const { getByPlaceholderText } = render(
    <OrderForm
      orderId="1234"
      isLoading={false}
      isFailed={false}
      onOrderUpdate={(orderId: string, fields: OrderUpdateFields) => {}}
    />
  );

  expect(getByPlaceholderText('Order Title')).toBeInTheDocument();
  expect(getByPlaceholderText('Booking Date')).toBeInTheDocument();
});