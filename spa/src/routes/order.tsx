import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useOrder from '../hooks/useOrder';
import useOrderUpdater from '../hooks/useOrderUpdater';
import type { OrderUpdateFields } from '../types';
import OrderView from '../components/order-view';
import OrderForm from '../components/order-form';
import Layout from '../components/layout';

function OrderRoute() {
  const { id } = useParams<{id: string}>();
  const { isLoading, order, updateOrderState } = useOrder(id);
  const [ isEditing, setIsEditing ] = useState(false);

  const {
    isFailed,
    updateOrder,
    isLoading: orderUpdateLoading
  } = useOrderUpdater(); 

  return (
    <Layout pageTitle="Order">
      <OrderView
        onToggleOrderForm={() => setIsEditing((state) => !state)}
        isLoading={isLoading}
        orderId={id}
        order={order}
      />
      {isEditing ? (
        <OrderForm
          isLoading={orderUpdateLoading}
          isFailed={isFailed}
          order={order}
          orderId={id}
          onOrderUpdate={(orderId: string, fields: OrderUpdateFields) => {
            updateOrder(orderId, fields, updateOrderState);
          }}
        />
      ): <></>}
    </Layout>
  );
}

export default OrderRoute;