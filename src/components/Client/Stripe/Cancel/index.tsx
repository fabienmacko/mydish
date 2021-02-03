import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../../containers/Header';
import './stripe-cancel.scss';

const Cancel = () => {
  return (
    <div id="stripe-cancel">
      <Header pageTitle="Payment Canceled" />
      <h2>Your payment has been canceled</h2>
      <Link to="/" className="continue">Continue Navigation</Link>
    </div>
  )
}

export default Cancel;