import React from 'react';
import Home from './Home';
import Menu from './Menu';
import NotFound from './NotFound';
import Cart from './Cart';
import Success from './Stripe/Success';
import Cancel from './Stripe/Cancel';
import {
  Switch,
  Route
} from "react-router-dom";
import './client.scss';

import hideHTMLLoader from '../../utils/hideLoader';

const Client = () => {

  hideHTMLLoader();

  return (
      <div id="client" data-test='client'>
        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/cart" component={Cart} />

          <Route exact path="/menu/:category" component={Menu} />

          <Route exact path="/payment/success" component={Success} />

          <Route exact path="/payment/cancel" component={Cancel} />


          <Route component={NotFound} />
        </Switch>
      </div>
  );
}

export default Client;
