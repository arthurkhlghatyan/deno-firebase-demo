import { useState, useEffect } from 'react';
import firebase from 'firebase';

const useIsLoggedIn = () => {
  const [loggedInUserId, setLoggedInUserId] = useState<string | undefined>(undefined);
  const [initialStateReceived, setInitialStateReceived] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedInUserId(user.uid);
      } else {
        setLoggedInUserId(undefined);
      }

      if (initialStateReceived === false) {
        setInitialStateReceived(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [initialStateReceived]);

  return {
    loggedInUserId,
    initialStateReceived
  };
};

export default useIsLoggedIn;