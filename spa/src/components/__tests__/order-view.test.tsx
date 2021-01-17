import React from 'react';
import { render } from '@testing-library/react';
import type { Order, OrderUpdateFields } from '../../types';
import OrderView from '../order-view';

test('Ensure OrderView renders properly', () => {
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

  const { getByText } = render(<OrderView
    isLoading={false}
    order={order}
    orderId={orderId} 
    onToggleOrderForm={() => {}} />
  );

  expect(getByText('Basic Order')).toBeInTheDocument();
});