import React, { Fragment } from 'react';
import { Placeholder, Card } from 'semantic-ui-react';
import OrderCard from './order-card';
import type { Order } from '../types';

interface OrderListProp {
  isLoading: boolean;
  orders: { [id: string]: Order };
}

function OrderList(props: OrderListProp) {
  return (
    <Fragment>
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
                  viewOrderUrl={`/order/${orderId}`} />
              );
            })
          }
        </Card.Group>
      )}
    </Fragment>
  );
}

export default OrderList;