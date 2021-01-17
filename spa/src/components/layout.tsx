import React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface LayoutProp {
  pageTitle: string;
  children: React.ReactChild | React.ReactChild[];
}

function Layout(props: LayoutProp) {
  return (
    <Container text style={{ marginTop: '2rem' }}>
      <Header as="h1">
        {props.pageTitle}
      </Header>
      {props.children}
    </Container>
  );
}

export default Layout;