import { useState } from 'react';
import firebase from 'firebase';

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setFailed] = useState(false);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      // Persist session information in localStorage
      const localStoragePersistance = firebase.auth.Auth.Persistence.LOCAL;

      await firebase.auth().setPersistence(localStoragePersistance);
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch(error) {
      setFailed(true);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isFailed,
    signIn
  };
};

export default useSignIn; 