import { useState } from 'react';
import type { OrderUpdateFields } from '../types';

export default () => {
  const [state, setState] = useState({
    isUpdated: false,
    isLoading: false
  });

  const updateOrder = (orderId: string, fields: OrderUpdateFields) => {};

  return [state, updateOrder];
};