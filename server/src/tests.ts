// Due to time shortage 
// everything is in a single file
import { superdeno } from 'https://deno.land/x/superdeno@3.0.0/mod.ts';
import { app } from './index.ts';
import { Order, OrderUpdateFields } from './types.ts';

Deno.test('POST /orders creates an order', async () => {
  const order: Order = {
    title: 'Order #1',
    bookingDate: 1554284950000,
    address: {
      city: 'Berlin',
      country: 'Germany',
      street: 'Wriezener Str. 12',
      zip: '13055'
    },
    customer: {
      email: 'emad.alam@construyo.de',
      name: 'Emad Alam',
      phone: '015252098067'
    }
  };

  await superdeno(app)
    .post('/orders')
    .send(order)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) throw err;
    });
});

Deno.test('PUT /orders/:id updates a single order', async () => { 
  // For now, make sure order exists in db
  // Alternatively create order before running update test
  const orderId = '';
  const orderUpdateFields: OrderUpdateFields = {
    title: 'Order #1',
    bookingDate: 1554284960000
  };

  await superdeno(app)
    .put(`/order/${orderId}`)
    .send(orderUpdateFields)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) throw err;
    });
});