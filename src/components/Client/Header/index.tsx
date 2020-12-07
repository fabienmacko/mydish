import React, { useEffect } from 'react';
import logo from '../../../style/images/mydish_logo.png';
import {Link} from 'react-router-dom';
import './header.scss';
import {Dish} from '../../../../interfaces';
type HeaderProps = {
  pageTitle: string,
  cart?: any
}

const Header = ({pageTitle, cart}: HeaderProps) => {
  console.log(cart);
  
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('#header h1')?.classList.add('aos-animate');
    }, 0);
  });

  return (
    <div id="header">
      <Link to={`/`} ><img src={logo} alt="MyDish logo" /></Link>
      <h1 data-aos="fade-down" data-aos-delay="200">{pageTitle}</h1>
      <Link to={`/cart`} ><i className="fas fa-shopping-cart fa-2x"></i></Link>
    </div>
  );
}

export default Header;