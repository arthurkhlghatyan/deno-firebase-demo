import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../layout';

test('Layout renders properly', () => {
  const { getByText } = render(
    <Layout pageTitle="Home">
      Hello World
    </Layout>
  );

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Hello World')).toBeInTheDocument();
});