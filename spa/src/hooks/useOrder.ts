import { useState } from 'react';

export default (orderId: string) => {
  const [state, setState] = useState({
    order: null,
    isLoading: false
  });

  return state;
};