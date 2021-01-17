import React from 'react';
import { useParams } from 'react-router-dom';
import useOrder from '../hooks/useOrder';
import type { OrderUpdateFields } from '../types';
import OrderView from '../components/order-view';
import Layout from '../components/layout';

function OrderRoute() {
  const { id } = useParams<{id: string}>();
  const { isLoading, order } = useOrder(id);

  return (
    <Layout pageTitle="Order">
      <OrderView
        isLoading={isLoading}
        orderId={id}
        onOrderUpdate={(orderId: string, fields: OrderUpdateFields) => {}}
        order={order}
      />
    </Layout>
  );
}

export default OrderRoute;