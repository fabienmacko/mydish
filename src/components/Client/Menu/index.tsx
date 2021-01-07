import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../containers/Header';
import { useQuery } from '@apollo/client';

import Product from '../../../containers/Product';
import './menu.scss';

import Nav from '../../../containers/Nav';

import Loader from '../Loader';

import {GET_FOOD} from '../../../utils/graphql';

import {Dish} from '../../../../interfaces';
import ParallaxImage from '../ParallaxImage';

const Menu = () => {

  useEffect(() => {
    document.title = categoryWithCapitalLetter+" Menu | MyDish"
  });

  const { category } = useParams<{ category: string }>();

  const categoryWithCapitalLetter = decodeURI(`${category[0].toUpperCase()}${category.slice(1)}`);

  
  const { data } = useQuery(GET_FOOD, {
    variables: {
      category: categoryWithCapitalLetter
    }
  });


  return (
    <>
      <Header pageTitle={`Select your favorite ${category}`} />
      <div id="menu" data-test="menu">
        {
          data && <ParallaxImage imagePath={data.food.imagePath} />
        }
        
        <Nav />
        <div className="products-container">
          {
            data ? data.food.dishs.map(({id, name, price, ingredients, imagePath}: Dish, index: number) =>
            <Product fadeDirection={index%2 === 0 ? 'left' : 'right'} key={id} id={id} name={name} price={price} ingredients={ingredients} imagePath={imagePath}  />
            )
            :
            <Loader />
          }
        </div>

      </div>
    </>
  );
}

export default Menu;