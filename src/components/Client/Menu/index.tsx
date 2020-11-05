import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql, from } from '@apollo/client';
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

  console.log(data);

  return (
    <div id="menu">
      Category: {category}
    </div>
  );
}

export default Menu;