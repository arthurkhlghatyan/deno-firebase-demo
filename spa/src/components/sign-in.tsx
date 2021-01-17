import React, { FormEvent, useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';

interface SignInProp {
  isLoading: boolean;
  isFailed: boolean;
  onSignIn: {
    (email: string, password: string): void
  }
}

function SignIn({ isLoading, isFailed, onSignIn }: SignInProp) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSignIn(email, password);
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: '100vh' }}
      verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h2"
          color="teal"
          textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit} autoComplete="off">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              required
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}/>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />

            <Button
              disabled={isLoading}
              type="submit"
              color="teal"
              size="large"
              fluid>
              Login
            </Button>
          </Segment>
        </Form>
        {isFailed && (
          <Message>
            Failed to sign in.
          </Message>
        )}

      </Grid.Column>
    </Grid>
  );
}

export default SignIn;