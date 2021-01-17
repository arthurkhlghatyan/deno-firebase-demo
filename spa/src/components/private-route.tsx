import React, { Fragment } from 'react';

interface PrivateRouteProp {
  children: React.ReactChild | React.ReactChild[];
}

function PrivateRoute({ children }: PrivateRouteProp) {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export default PrivateRoute;