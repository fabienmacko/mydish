import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './cart.scss';

import Header from '../Header';
import hideLoader from '../../../utils/hideLoader';

import {getUniqueProducts} from '../../../utils/localStorageProducts';
import ParallaxImage from '../ParallaxImage';
import CommandsImagePath from '../../../style/images/commands.jpg';
import {CartProductInterface} from '../../../../interfaces';
import CartProduct from './CartProduct';

const Cart = () => {

  useEffect(() => {
    hideLoader();
  });

  const cart = getUniqueProducts();
  
  return (
    <div id="cart">
      <Header pageTitle="Find your articles below" />
      <ParallaxImage imagePath={CommandsImagePath} />
      <div className="wrap cf">
        <div className="heading cf">
          <h1>MY DISHS</h1>
          <Link to="/" className="continue">Continue Shopping</Link>
        </div>
        <div className="cart">
          <ul className="cartWrap">
            {
              cart && cart.map(({id, name, price, imagePath}: CartProductInterface, index: number) => {
                
                const oddOrEven = index%2 === 0 ? 'odd' : 'even';

                return <CartProduct key={id} oddOrEven={oddOrEven} id={id} name={name} price={price} imagePath={imagePath} />
              })
            }
          </ul>
        </div>
        
        <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label><input type="text" name="promo" placeholder="Enter Code" />
        <a href="#" className="btn"></a></div>
        
        <div className="subtotal cf">
          <ul>
            <li className="totalRow"><span className="label">Subtotal</span><span className="value">$35.00</span></li>
            
                <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>
            
                  <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li>
                  <li className="totalRow final"><span className="label">Total</span><span className="value">$44.00</span></li>
            <li className="totalRow"><a href="#" className="btn continue">Checkout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;