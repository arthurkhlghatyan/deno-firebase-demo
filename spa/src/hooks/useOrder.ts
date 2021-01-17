import { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Order } from '../types';

const useOrder = (orderId: string) => {
  const [order, setOrder] = useState<Order | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      const orderDocument = await firebase
        .firestore()
        .collection('orders')
        .doc(orderId)
        .get();

      setOrder(orderDocument.data() as Order);
      setIsLoading(false);
    })();

  }, [orderId]);

  return {
    isLoading,
    order: order as Order
  };
};

export default useOrder;