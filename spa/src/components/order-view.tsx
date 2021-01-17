import React from 'react';
import type { Order, OrderUpdateFields } from '../types';

interface OrderViewProp {
  orderId: string;
  order: Order;
  onOrderUpdate: {
    (orderId: string, fields: OrderUpdateFields): void
  }
}

function OrderView(props: OrderViewProp) {
  return (
    <div />
  );
}

export default OrderView;