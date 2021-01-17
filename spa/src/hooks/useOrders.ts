import { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Order } from '../types';

const useOrders = () => {
  const [orders, setOrders] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      const orderCollection = await firebase.firestore().collection('orders').get();
      const orders: {[id: string]: Order} = {};

      orderCollection.docs.forEach((doc) => {
        orders[`${doc.id}`] = doc.data() as Order;
      });

      setOrders(orders);
      setIsLoading(false);
    })();

  }, []);

  return {
    isLoading,
    orders
  };
};

export default useOrders;