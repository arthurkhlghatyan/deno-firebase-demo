import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import type { Order } from '../../types';
import OrderList from '../order-list';

test('Ensure OrderList renders properly', () => {
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
  
  const orders = { '1234': order };

  const { getByText } = render(
    <MemoryRouter>
      <OrderList isLoading={false} orders={orders} />
    </MemoryRouter>
  );

  expect(getByText('Basic Order')).toBeInTheDocument();
});