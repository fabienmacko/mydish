import React from 'react';
import './product.scss';

import {ProductInterface} from '../../../../interfaces';

const Product = ({name, price, ingredients, imagePath, fadeDirection}: ProductInterface) => {

  return (
    <div id="product" data-aos={`fade-${fadeDirection}`}>
      <section className="product">
        <div className="product__photo">
          <div className="photo-container">
            <div className="photo-main" style={{
              backgroundImage: `url('${imagePath}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
            <h1>{name}</h1>
          </div>
          <div className="price">
            <span>{price}</span>€
          </div>
          <div className="description">
            <h3>INGREDIENTS</h3>
            <ul>
              {
                ingredients.map((ingredient,index) => <li key={ingredient+index}>{ingredient}</li>)
              }
            </ul>
          </div>
          <button className="buy--btn">ADD TO CART</button>
        </div>
      </section>
    </div>
  );
}

export default Product;