import React from 'react';
import Home from './Home';
import Product from './Product';
import Menu from './Menu';
import {
  Switch,
  Route
} from "react-router-dom";
import './client.scss';

const Client = () => {
  return (
      <div id="client" data-test='client'>
        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/menu/:category" component={Menu} />

          <Route path="/product/:productId" component={Product} />

        </Switch>
      </div>
  );
}

export default Client;
