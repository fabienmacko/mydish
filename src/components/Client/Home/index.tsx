import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import './home.scss';
import {Food} from '../../../../interfaces';

const Home = () => {

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
        data && data.foods.map((foodItem: Food, index: number) => (
          <div>
            <Link to={`/menu/${foodItem.category.toLowerCase()}`}
            className="food-category__background" style={{
              backgroundImage: `url("${foodItem.imagePath}")`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}></Link>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
