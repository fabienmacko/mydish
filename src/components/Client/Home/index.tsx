import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import './home.scss';
import Header from '../../../containers/Header'; 
import {Food} from '../../../../interfaces';
import Loader from '../Loader';

const Home = () => {

  useEffect(() => {
    document.title = "MyDish"
  });

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

  return (
    <>
    <Header pageTitle="What do you want to eat?" />
    <div id="home">
      {
        data ? data.foods.map((foodItem: Food, index: number) => (
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
        : 
        <Loader />
      }
    </div>
    </>
  );
}

export default Home;
