import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Header from '../Header'; 
import './home.scss';
import {Food} from '../../../../interfaces';

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
