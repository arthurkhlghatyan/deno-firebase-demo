import React from 'react';
import type { Order } from '../types';

interface OrderCardProp {
  orderId: string;
  order: Order;
  viewOrderUrl: string;
}

function OrderCard(props: OrderCardProp) {
  return (
    <div />
  );
}

export default OrderCard;