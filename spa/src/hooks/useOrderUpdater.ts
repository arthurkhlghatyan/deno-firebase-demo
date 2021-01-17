import { useState } from 'react';
import type { OrderUpdateFields } from '../types';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setFailed] = useState(false);

  const updateOrder = async (orderId: string, fields: OrderUpdateFields) => {
    setIsLoading(true);

    try {

      await fetch(`http://localhost:8000/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(fields)
      })

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