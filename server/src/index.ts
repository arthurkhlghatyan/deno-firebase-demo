import { opine } from './deps.ts';
import createOrder from './routes/create-order.ts';
import updateOrder from './routes/update-order.ts';
import './fcl.ts';

const app = opine();

// // Setup routes
app.post('/orders', createOrder);
app.put('/orders/:id', updateOrder);

app.listen(8000);
console.log('App is running at http://localhost:8000');

export { app };