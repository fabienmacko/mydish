import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import { useQuery } from '@apollo/client';
import { Parallax } from 'react-scroll-parallax';

import Product from '../Product';
import './menu.scss';

import Nav from '../Nav';

import {GET_FOOD} from '../../../utils/graphql';

import {Dish} from '../../../../interfaces';

const Menu = () => {

  const { category } = useParams<{ category: string }>();


  const categoryWithCapitalLetter = `${category[0].toUpperCase()}${category.slice(1)}`;

  const { data } = useQuery(GET_FOOD, {
    variables: {
      category: categoryWithCapitalLetter
    }
  });

  if (data) {

    // Fade out the loader when the app has been loaded
    var loader: HTMLElement = document.getElementById("loader")!;
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
      }, 400);
    }

  };
  

  return (
    <>
      <Header pageTitle={`Select your favorite ${category}`} />
      <div id="menu" data-test="menu">
        {
          data && (
            <Parallax className="header-image" y={[20, -20]} tagOuter="figure">
                <div style={{
                  backgroundImage: `url('${data.food.imagePath}')`,
                  width: '100%',
                  height: '500px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
            </Parallax>
          )
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