import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, Icon } from 'semantic-ui-react';
import type { Order } from '../types';

interface OrderCardProp {
  orderId: string;
  order: Order;
  viewOrderUrl: string;
}

function OrderCard({
  viewOrderUrl,
  order: { 
    title,
    bookingDate,
    address,
    customer
  }
}: OrderCardProp) {
  const bookingDateFormatted = typeof bookingDate === 'number' ? 
    moment(bookingDate).format('MM-DD-YYYY') : 
    '';

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Link to={viewOrderUrl}>
            {title}
          </Link>
        </Card.Header>
        <Card.Meta>Booked: {bookingDateFormatted}</Card.Meta>
        <Card.Description>
          Addr: {typeof address !== 'undefined' ? address.street : 'Unspecified'}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="user" title="Customer" />
          {typeof customer !== 'undefined' && customer.name}
        </span>
      </Card.Content>
    </Card>
  );
}

export default OrderCard;