import React, { FormEvent, Fragment, useState } from 'react';
import moment from 'moment';
import { Form, Segment, Button } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

import type { OrderUpdateFields } from '../types';

interface OrderFormProp {
  isLoading: boolean;
  isFailed: boolean;
  orderId: string;
  onOrderUpdate: {
    (orderId: string, fields: OrderUpdateFields): void
  }
}

function OrderForm(props: OrderFormProp) {
  const [title, setTitle] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const onBookingDateChange = (
    event: React.SyntheticEvent,
    data: any
  ) => setBookingDate(data.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onOrderUpdate(props.orderId, {
      title,
      bookingDate: moment(bookingDate, 'DD-MM-YYYY').valueOf()
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
            iconPosition="left"
            popupPosition='bottom left'
            placeholder="Booking Date"
            value={bookingDate}
            onChange={onBookingDateChange}
          />

          <Button
            disabled={false}
            type="submit"
            color="teal"
            size="large"
            >
            Save
          </Button>
        </Segment>
      </Form>
    </Fragment>
  );
}

export default OrderForm;