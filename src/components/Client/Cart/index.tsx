import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './cart.scss';

import Header from '../../../containers/Header';

import {getUniqueProducts, getProducts} from '../../../utils/localStorageProducts';
import ParallaxImage from '../ParallaxImage';
import CommandsImagePath from '../../../style/images/commands.jpg';
import {CartProductInterface} from '../../../../interfaces';
import CartProduct from '../../../containers/CartProduct';
import {Dish} from '../../../../interfaces';

const Cart = () => {

  useEffect(() => {
    document.title = "Cart | MyDish"
  });

  
  const localStorageCart = getUniqueProducts();

  const [productsToDisplay, setProductsToDisplay] = useState(localStorageCart);

  const [commandTotalPrice, setCommandTotalPrice] = useState(getProducts()?.reduce((acc: number, dish: Dish) => acc + dish.price, 0));
  
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
              productsToDisplay?.length ? (
                productsToDisplay.map(({id, name, price, imagePath}: CartProductInterface, index: number) => {
                
                  const oddOrEven = index%2 === 0 ? 'odd' : 'even';
  
                  return <CartProduct commandTotalPrice={commandTotalPrice} setCommandTotalPrice={setCommandTotalPrice} setProductsToDisplay={setProductsToDisplay} key={id} oddOrEven={oddOrEven} id={id} name={name} price={price} imagePath={imagePath} />
                })
              )
              :
              (
                <div>
                  <h2>Your cart is empty</h2>
                </div>
              )
            }
          </ul>
        </div>
        
        <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label><input type="text" name="promo" placeholder="Enter Code" />
        <a href='#' className="btn"></a></div>
        
        <div className="subtotal cf">
          <ul>
          <li className="totalRow final"><span className="label">Total</span><span className="value">{commandTotalPrice}€</span></li>
            <li className="totalRow"><a href="#" className="btn continue">Checkout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;