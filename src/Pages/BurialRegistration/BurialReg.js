import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BurialReg.css';

import Title from '../../components/Title/Title';
// import { ToastContainer } from 'react-toastify';
// import { otherPropsFromToastConfigure } from 'react-toastify';
// import StripeContainer from "./StripeContainer";
import Collapsibles from './Collapsibles';
import Collapsible from './Collapsible';

//product object

export const BurialReg = () => {
  return (
    <div>
      <Title content="Burial Registration" />
      <Collapsible />
      <Collapsibles />
    </div>
  );
};
