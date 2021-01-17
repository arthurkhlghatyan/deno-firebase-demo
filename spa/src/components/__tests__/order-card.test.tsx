import React from 'react';
import { render } from '@testing-library/react';
import type { Order } from '../../types';
import OrderCard from '../order-card';

test('Ensure OrderCard renders properly', () => {
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
  const orderId = '1';

  const { getByText } = render(<OrderCard
    order={order}
    orderId={orderId}
    viewOrderUrl={`/orders/${orderId}`} />);

  expect(getByText('Berlin')).toBeInTheDocument();
});