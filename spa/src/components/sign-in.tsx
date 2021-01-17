import React from 'react';

interface SignInProp {
  onSignIn: {
    (email: string, password: string): void
  }
}

function SignIn(props: SignInProp) {
  return (
    <div />
  );
}

export default SignIn;