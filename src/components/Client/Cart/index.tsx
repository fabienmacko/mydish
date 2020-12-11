import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import './cart.scss';

import Header from '../../../containers/Header';

import { getUniqueProducts, getProducts } from '../../../utils/localStorageProducts';
import ParallaxImage from '../ParallaxImage';
import CommandsImagePath from '../../../style/images/commands.jpg';
import { CartProductInterface } from '../../../../interfaces';
import CartProduct from '../../../containers/CartProduct';
import { Dish } from '../../../../interfaces';


const stripePromise = loadStripe("pk_test_51HwtM9FDuWQ18EbPREwlfLF36MVd9Xn5RLcjFYfRAzL5xJ1l8GwK1WBsLevKtF7DEbC8JbH3TAvETdiWJwZdhXiB00cxtvLJ60");

const Cart = () => {

  useEffect(() => {
    document.title = "Cart | MyDish";
  });


  const localStorageCart = getUniqueProducts();

  const [productsToDisplay, setProductsToDisplay] = useState(localStorageCart);

  const [commandTotalPrice, setCommandTotalPrice] = useState(getProducts()?.reduce((acc: number, dish: Dish) => acc + dish.price, 0));

  const handleCheckout = async () => {

    const stripe = await stripePromise;

    const clientItemsIds = getProducts().map((product: CartProductInterface) => product.id);
    console.log(clientItemsIds);

    let apiURL = '';

    if (process.env.NODE_ENV === 'development') {
      apiURL = process.env.REACT_APP_DEV_API_URL!;
    } else if (process.env.NODE_ENV === 'production') {
      apiURL = process.env.REACT_APP_PROD_API_URL!;
    }

    await axios.post(`${apiURL}/stripe/create-checkout-session`, { clientItemsIds })
      .then(async response => {
        console.log(response);
        const session = response.data.id;

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe!.redirectToCheckout({
          sessionId: session,
        });

        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
      })
  }

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
                productsToDisplay.map(({ id, name, price, imagePath }: CartProductInterface, index: number) => {

                  const oddOrEven = index % 2 === 0 ? 'odd' : 'even';

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

            {productsToDisplay!.length > 0 && <li className="totalRow"><button className="btn continue" onClick={handleCheckout}>Checkout</button></li>}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;