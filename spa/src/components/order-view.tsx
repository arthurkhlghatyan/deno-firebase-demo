import React from 'react';
import moment from 'moment';
import { Card, Icon, Placeholder } from 'semantic-ui-react';
import type { Order } from '../types';

interface OrderViewProp {
  isLoading: boolean;
  orderId: string;
  order: Order | undefined;
  onToggleOrderForm: Function;
}

function OrderView({
  onToggleOrderForm,
  isLoading,
  order,
}: OrderViewProp) {
  if (isLoading || typeof order === 'undefined') {
    return (
      <Placeholder>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder>
    );
  }

  const {
    title,
    address,
    customer,
    bookingDate
  } = order;

  const bookingDateFormatted = typeof bookingDate === 'number' ? 
    moment(bookingDate).format('MM-DD-YYYY') : 
    '';

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <a onClick={() => onToggleOrderForm()}>
            <Icon name="edit" title="Edit Order" />
          </a>
          {title}
        </Card.Header>
        <Card.Meta>Booked: {bookingDateFormatted}</Card.Meta>
        <Card.Description>
          Addr: {typeof address !== 'undefined' ? (
            `${address.street} ${address.city} ${address.zip} ${address.country}`
          ) : 'Unspecified' }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="user" title="Customer Name" />
          {typeof customer !== 'undefined' && customer.name}
        </span>
        <span style={{ marginLeft: '1rem' }}>
          <Icon name="mail" title="Customer Email" />
          {typeof customer !== 'undefined' && customer.email}
        </span>
        <span style={{ marginLeft: '1rem' }}>
          <Icon name="phone" title="Customer Phone" />
          {typeof customer !== 'undefined' && customer.phone}
        </span>
      </Card.Content>
    </Card>
  );
}

export default OrderView;