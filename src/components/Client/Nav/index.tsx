import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {NavLink} from 'react-router-dom';
import './nav.scss';

import {GET_FOODS} from '../../../utils/graphql';

const Nav = () => {

  const { data } = useQuery(GET_FOODS);

  useEffect(() => {
    
    let isRendered = true;

    window.addEventListener('scroll', (e) => {
      let scrollTop = window.scrollY;
  
      if (scrollTop >= 400 && isRendered) {
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
     <ul>
      {
        data && data.foods.map((food: any) => (
          <li key={food.id}>
            <NavLink to={`/menu/${food.category.toLowerCase()}`} activeClassName="active">{food.category}</NavLink>
          </li>
        ))
      }
     </ul>
    </nav>
  );
}

export default Nav;