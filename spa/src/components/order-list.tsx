import React from 'react';
import { Container, Header, Placeholder, Card } from 'semantic-ui-react';
import OrderCard from './order-card';
import type { Order } from '../types';

interface OrderListProp {
  isLoading: boolean;
  orders: { [id: string]: Order };
}

function OrderList(props: OrderListProp) {
  return (
    <Container text style={{ marginTop: '2rem' }}>
      <Header as="h1">
        Orders
      </Header>
      {props.isLoading ? (
        <Placeholder>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder>
      ) : (
        <Card.Group>
          {
            Object.keys(props.orders).map((orderId) => {
              return (
                <OrderCard
                  orderId={orderId}
                  order={props.orders[orderId]}
                  key={orderId}
                  viewOrderUrl={`/orders/${orderId}`} />
              );
            })
          }
        </Card.Group>
      )}
    </Container>
  );
}

export default OrderList;