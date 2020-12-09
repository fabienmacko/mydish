import React from 'react';
import './product.scss';

const LoadingProduct = () => {


  return (
    <div id="product">
      <section className="product">
        <div className="product__photo">
          <div className="photo-container">
            <div className="photo-main">
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
          </div>
          <div className="price">
            <span></span>
          </div>
          <div className="description">
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoadingProduct;