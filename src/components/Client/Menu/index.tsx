import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import { useQuery, gql } from '@apollo/client';
import {Food} from '../../../../interfaces';
import './menu.scss';

const Menu = () => {
  const { category } = useParams<{ category: string }>();

  const FOODS = gql`
  query {
    foods{
      category
      dishs{
        name
        price
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(FOODS);
  if (loading) console.log('loading');;
  if (error) console.log('error');;

  if (data) {

    var dataObject = data.foods.filter((food: Food) => food.category.toLowerCase() === category);
  }



  return (
    <>
    <Header pageTitle={`Select your favorite ${category}`} />
    <div id="menu" data-test="menu">
      {
        dataObject && <p>Category: {category}</p>
      }
    </div>
    </>
  );
}

export default Menu;