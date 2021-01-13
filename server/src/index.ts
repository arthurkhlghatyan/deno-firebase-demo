// import { opine } from './deps.ts';
// import createOrder from './routes/create-order.ts';
// import updateOrder from './routes/update-order.ts';
import { getGoogleAuthToken } from './auth.ts';
import { Client } from './firebase.ts';

const token = await getGoogleAuthToken();
const project_id = 'construyo-coding-challenge';

const client = new Client(token.access_token, project_id);

const data = await client.baseReq<[any], undefined>('/orders', 'GET');

console.log(data);

// const app = opine();

// // Setup routes
// app.post('/orders', createOrder);
// app.put('/orders/:id', updateOrder);

// app.listen(8000);
// console.log('App is running at http://localhost:8000');