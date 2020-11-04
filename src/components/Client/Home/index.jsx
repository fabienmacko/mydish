import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import './home.scss';

const Home = ({ food }) => {

  const FOODS = gql`
  query {
    foods{
      category
      imagePath
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
    <div id="home">
      {
        data && data.foods.map((foodItem, index) => (
          <Link to={`/menu/${foodItem.category.toLowerCase()}`} className="food-category" key={"category" + index} style={{
            width: `calc(100%/${food.length})`
          }}>
              <div className="food-category__background" style={{
                backgroundImage: `url("${foodItem.imagePath}")`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}></div>
          </Link>
        ))
      }
    </div>
  );
}

export default Home;
