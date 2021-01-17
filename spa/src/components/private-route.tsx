import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

interface PrivateRouteProp {
  children: React.ReactChild | React.ReactChild[];
  isLoggedIn: boolean;
}

function PrivateRoute({ children, isLoggedIn }: PrivateRouteProp) {
  return (
    <Fragment>
      {isLoggedIn ? children : <Redirect to="/sign-in" />}
    </Fragment>
  );
}

export default PrivateRoute;