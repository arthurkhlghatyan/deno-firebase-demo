import { useState } from 'react';

export default () => {
  const [state, setState] = useState({
    orders: null,
    isLoading: false
  });

  return state;
};