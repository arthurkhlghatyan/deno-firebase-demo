import React from 'react';
import { render } from '@testing-library/react';
import PrivateRoute from '../private-route';

test('PrivateRoute does not render child when not logged in', () => {

  const { getByText } = render(<PrivateRoute>Hello World</PrivateRoute>);

  expect(('Hello World')).not.toBeInTheDocument();
});