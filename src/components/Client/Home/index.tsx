import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import './home.scss';
import Header from '../Header'; 
import {Food} from '../../../../interfaces';
import hideLoader from '../../../utils/hideLoader';

const Home = () => {

  const GET_FOODS = gql`
  query {
    foods{
      id
      category
      imagePath
      dishs{
        name
        price
      }
    }
  }
  `;

  const { data } = useQuery(GET_FOODS);

  if (data) {
    hideLoader();
  };

  return (
    <>
    <Header pageTitle="What do you want to eat?" />
    <div id="home">
      {
        data && data.foods.map((foodItem: Food, index: number) => (
          <Link to={`/menu/${foodItem.category.toLowerCase()}`} key={foodItem.id} className="food-category" style={{
            width: `calc(100%/${data.foods.length})`
          }}>
            <div className="food-category__background" style={{
              backgroundImage: `url("${foodItem.imagePath}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}></div>
          </Link>
        ))
      }
    </div>
    </>
  );
}

export default Home;
