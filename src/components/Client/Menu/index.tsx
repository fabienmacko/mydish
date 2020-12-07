import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../containers/Header';
import { useQuery } from '@apollo/client';

import Product from '../Product';
import './menu.scss';

import Nav from '../Nav';

import {GET_FOOD} from '../../../utils/graphql';

import {Dish} from '../../../../interfaces';

import hideLoader from '../../../utils/hideLoader';
import ParallaxImage from '../ParallaxImage';

const Menu = () => {

  useEffect(() => {
    document.title = categoryWithCapitalLetter+" Menu | MyDish"
  });

  const { category } = useParams<{ category: string }>();

  const categoryWithCapitalLetter = `${category[0].toUpperCase()}${category.slice(1)}`;

  const { data } = useQuery(GET_FOOD, {
    variables: {
      category: categoryWithCapitalLetter
    }
  });

  if (data) {
    hideLoader();
  };
  

  return (
    <>
      <Header pageTitle={`Select your favorite ${category}`} />
      <div id="menu" data-test="menu">
        {
          data && <ParallaxImage imagePath={data.food.imagePath} />
        }
        
        <Nav />

        {
          data && data.food.dishs.map(({id, name, price, ingredients, imagePath}: Dish, index: number) => {
          return <Product fadeDirection={index%2 === 0 ? 'left' : 'right'} key={id} id={id} name={name} price={price} ingredients={ingredients} imagePath={imagePath}  />
          })
        }
      </div>
    </>
  );
}

export default Menu;