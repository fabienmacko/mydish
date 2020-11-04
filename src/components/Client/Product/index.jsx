import React from 'react';
import pizza1 from '../../../style/images/pizza1.png';
import './product.scss';


const Product = ({ match }) => {

  return (
    <div id="product">
      <section className="product">
        <div className="product__photo">
          <div className="photo-container">
            <div className="photo-main" style={{
              backgroundImage: `url(${pizza1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div className="controls">
                <i className="fas fa-share-alt fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
            <h1>Italia</h1>
          </div>
          <div className="price">
            <span>13</span>€
          </div>
          <div className="description">
            <h3>INGREDIENTS</h3>
            <ul>
              <li>Jambon</li>
              <li>Mozza</li>
              <li>Roquette</li>
              <li>Tomates</li>
            </ul>
          </div>
          <button className="buy--btn">ADD TO CART</button>
        </div>
      </section>
    </div>
  );
}

export default Product;