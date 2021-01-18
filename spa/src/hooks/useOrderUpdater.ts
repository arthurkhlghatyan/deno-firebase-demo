import { useState } from 'react';
import type { Order, OrderUpdateFields } from '../types';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setFailed] = useState(false);

  const updateOrder = async (
    orderId: string,
    fields: OrderUpdateFields,
    updateOrderState: Function
  ) => {
    setIsLoading(true);

    try {

      await fetch(`http://localhost:8000/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(fields)
      })

      updateOrderState((order: Order) => ({
        ...order,
        ...fields,
      }));
      setIsLoading(false);
    } catch(error) {
      setFailed(true);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isFailed,
    updateOrder
  };
};