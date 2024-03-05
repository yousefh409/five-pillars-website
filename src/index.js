import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
//import 'reactjs-popup/dist/index.css';

(async () => {
  //you'll want to change this to whatever your publishable key is from stripe
  const stripePromise = loadStripe('pk_test_51MrSm9Ipjb8xd8GP5cQIYeRavMUQDHys9hzs4GnIPo7TtQW8fiNfaxixJSIdXyIwsKSDAQ2XJCfIiDbUPzRQOHDF00IStxnPIj')
  ReactDOM.render(
    <React.StrictMode>
      <Elements stripe={stripePromise}>
      <App />
      </Elements>
    </React.StrictMode>,
    document.getElementById('root')
  );
})()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();