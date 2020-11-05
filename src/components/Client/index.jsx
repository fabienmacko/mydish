import React from 'react';
import Home from '../../containers/Home';
import Product from './Product';
import Header from './Header'; 
import Menu from '../../containers/Menu';
import {
  Switch,
  Route
} from "react-router-dom";
import './client.scss';

const Client = () => {
  return (
      <div id="client" data-test='client'>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/menu/:category" component={Menu} />

          <Route path="/product/:productId" component={Product} />

        </Switch>
      </div>
  );
}

export default Client;
