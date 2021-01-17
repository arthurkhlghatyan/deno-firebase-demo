import React from 'react';
import useOrders from '../hooks/useOrders';
import OrderList from '../components/order-list';
import Layout from '../components/layout';

function OrdersRoute() {
  const { isLoading, orders } = useOrders();

  return (
    <Layout pageTitle="Orders">
      <OrderList isLoading={isLoading} orders={orders} />
    </Layout>
  );
}

export default OrdersRoute;