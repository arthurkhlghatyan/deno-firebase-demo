import { useState } from 'react';

export default () => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = (email: string, password: string) => {};

  return [isLoading, signIn];
};