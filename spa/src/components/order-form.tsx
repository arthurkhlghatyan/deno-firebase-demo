import React, { FormEvent, Fragment, useState, useEffect } from 'react';
import moment from 'moment';
import { Form, Segment, Button, Message } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

import type { OrderUpdateFields, Order } from '../types';

interface OrderFormProp {
  isLoading: boolean;
  isFailed: boolean;
  order: Order;
  orderId: string;
  onOrderUpdate: {
    (orderId: string, fields: OrderUpdateFields): void
  }
}

function OrderForm({ order, orderId, onOrderUpdate, isLoading, isFailed }: OrderFormProp) {
  const [title, setTitle] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const dateFormat = 'MM-DD-YYYY';

  useEffect(() => {
    setTitle(order.title);
    setBookingDate(moment(order.bookingDate).format(dateFormat));
  }, [order]);

  const onBookingDateChange = (
    event: React.SyntheticEvent,
    data: any
  ) => setBookingDate(data.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onOrderUpdate(orderId, {
      title,
      bookingDate: moment(bookingDate, dateFormat).valueOf()
    });
  };

  return (
    <Fragment>
      <Form size="large" onSubmit={handleSubmit} autoComplete="off">
        <Segment stacked>
          <Form.Input
            fluid
            icon="address card outline"
            iconPosition="left"
            placeholder="Order Title"
            required
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}/>
          
          <DateInput
            dateFormat={dateFormat}
            iconPosition="left"
            popupPosition='bottom left'
            placeholder="Booking Date"
            value={bookingDate}
            onChange={onBookingDateChange}
          />

          <Button
            disabled={isLoading}
            type="submit"
            color="teal"
            size="large"
            >
            Save
          </Button>
        </Segment>
      </Form>
      {isFailed && (
        <Message>
          Failed to update the order
        </Message>
      )}
    </Fragment>
  );
}

export default OrderForm;