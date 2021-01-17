import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';

// Routes
import SignInRoute from './routes/sign-in';
import OrderRoute from './routes/order';
import OrdersRoute from './routes/orders';

// Firebase configuration
import FIREBASE_CONFIG from './firebaseConfig.js';

firebase.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route path="/sign-in">
          <SignInRoute />
        </Route>
        <Route path="/order/:id">
          <OrderRoute />
        </Route>
        <Route path="/orders">
          <OrdersRoute />
        </Route>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
