import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PrivateRoute from '../private-route';

test('PrivateRoute renders content when user is logged in', () => {

  const { getByText } = render(
    <MemoryRouter>
      <PrivateRoute 
        isLoggedIn={true}>
          Hello World
      </PrivateRoute>
    </MemoryRouter>
  );

  expect(getByText('Hello World')).toBeInTheDocument();
});