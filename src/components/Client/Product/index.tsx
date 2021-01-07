import React from 'react';
import './product.scss';

import Swal from 'sweetalert2';

import {CartProductInterface} from '../../../../interfaces';

import {ProductInterface} from '../../../../interfaces';

import {addProduct} from '../../../utils/localStorageProducts';

import formatPrice from '../../../utils/formatPrice';

const Product = ({id, name, price, ingredients, imagePath, fadeDirection, addNewItemToCart}: ProductInterface) => {

  const formattedPrice = formatPrice(price);
  console.log(formattedPrice);
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  const handleAddProductClick = (ItemClicked: CartProductInterface) => {
    Toast.fire({
      icon: 'success',
      title: `${name} has been added to your cart.`
    });

    addProduct(ItemClicked);
    addNewItemToCart(ItemClicked);
  }  
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
          <div className="product__details">
            <div className="price">
              <span>{formattedPrice}</span>€
            </div>
            {
              ingredients.length > 0 && (
                <>
                  <div className="separator"></div>
                  <div className="description">
                    <h3>INGREDIENTS</h3>
                    <ul>
                      {
                        ingredients.map((ingredient,index) => <li key={ingredient+index}>{ingredient}</li>)
                      }
                    </ul>
                  </div>
                </>
              )
            }
          </div>
          <button className="buy--btn" onClick={() => handleAddProductClick({id, name, price, imagePath})} >ADD TO CART</button>
        </div>
      </section>
    </div>
  );
}

export default Product;