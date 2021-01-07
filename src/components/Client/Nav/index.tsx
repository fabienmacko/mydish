import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {Link} from 'react-router-dom';
import logo from '../../../style/images/mydish_logo.png';
import {NavLink} from 'react-router-dom';
import './nav.scss';

import {GET_FOODS} from '../../../utils/graphql';

interface NavProps {
  cart?: any
}

const Nav = ({cart}: NavProps) => {

  const { data } = useQuery(GET_FOODS);

  const numberOfItemsInCart: number = cart ? cart.length : 0;

  useEffect(() => {
    
    let isRendered = true;

    window.addEventListener('scroll', (e) => {
      let scrollTop = window.scrollY;
  
      if (scrollTop >= 410 && isRendered) {
        setShouldNavBarBeFixedTop(true);
      } else if (isRendered) {
        setShouldNavBarBeFixedTop(false);
      }
    });

    return () => {
      isRendered = false;
    };
  });

  const [shouldNavBarBeFixedTop, setShouldNavBarBeFixedTop] = useState(false);

  return (
    <nav id="nav" className={shouldNavBarBeFixedTop ? 'fixed' : ''}>
      <Link to={`/`} ><img className={shouldNavBarBeFixedTop ? "active" : ""} src={logo} alt="MyDish logo" /></Link>
      
     <ul>
      {
        data && data.foods.map((food: any) => (
          <li key={food.id}>
            <NavLink to={`/menu/${food.category.toLowerCase()}`} activeClassName="active">{food.category}</NavLink>
          </li>
        ))
      }
     </ul>

     <Link className={shouldNavBarBeFixedTop ? "cartButton active" : "cartButton"} to={`/cart`} >
        <div className="itemsCounter">{numberOfItemsInCart}</div>
        <i className="fas fa-shopping-cart fa-2x"></i>
      </Link>
    </nav>
  );
}

export default Nav;