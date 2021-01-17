import React from 'react';
import SignIn from '../components/sign-in';
import useSignIn from '../hooks/useSignIn';

function SignInRoute() {
  const { isLoading, isFailed, signIn } = useSignIn();

  return (
    <SignIn onSignIn={signIn} isLoading={isLoading} isFailed={isFailed} />
  );
}

export default SignInRoute;