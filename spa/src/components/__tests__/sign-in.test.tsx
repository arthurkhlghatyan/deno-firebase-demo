import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../sign-in';

test('Ensure SignIn renders properly', () => {

  const onSignIn = (email: string, password: string) => {};

  const { getByPlaceholderText } = render(
    <SignIn
      isLoading={false}
      isFailed={false}
      onSignIn={onSignIn}
    />
  );

  expect(getByPlaceholderText('Password')).toBeInTheDocument();
});