import React from 'react';
import type { Order } from '../types';

interface OrderListProp {
  orders: { [id: string]: Order };
}

function OrderList(props: OrderListProp) {
  return (
    <div />
  );
}

export default OrderList;