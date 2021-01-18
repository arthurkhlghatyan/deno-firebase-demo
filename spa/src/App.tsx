import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import useIsLoggedIn from './hooks/useIsLoggedIn';

// Routes
import SignInRoute from './routes/sign-in';
import OrderRoute from './routes/order';
import OrdersRoute from './routes/orders';
import PrivateRoute from './components/private-route';

function App() {
  const { loggedInUserId, initialStateReceived } = useIsLoggedIn();
  const isLoggedIn = typeof loggedInUserId !== 'undefined';

  if (!initialStateReceived) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <Route path="/sign-in">
        {!isLoggedIn ? <SignInRoute /> : <Redirect to="/orders" /> }
      </Route>
      <Switch>
        <Redirect from="/" to="/orders" exact />
        <Route path="/order/:id">
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <OrderRoute />
          </PrivateRoute>
        </Route>
        <Route path="/orders" exact>
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <OrdersRoute />
          </PrivateRoute>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;