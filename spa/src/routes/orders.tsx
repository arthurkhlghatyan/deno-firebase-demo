import React from 'react';
import useOrders from '../hooks/useOrders';
import OrderList from '../components/order-list';

function OrdersRoute() {
  const { isLoading, orders } = useOrders();

  return (
    <OrderList isLoading={isLoading} orders={orders} />
  );
}

export default OrdersRoute;