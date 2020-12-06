import React, {useState} from 'react';

import {getProductById,removeProduct} from '../../../../utils/localStorageProducts';

type CartProduct = {
  oddOrEven: string,
  id: string,
  name: string,
  price: number,
  imagePath: string
}

const CartProduct = ({oddOrEven, id, name, price, imagePath}: CartProduct) => {
  
  const productQuantity = getProductById(id).length;
  // State

  const [quantity, setQuantity] = useState(productQuantity);
  const [totalPrice, setTotalPrice] = useState(quantity * price);
  
  const addQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * price);
  }
  const reduceQuantity = () => {

    removeProduct(id);

    if (shouldQuantityBeReduced()) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * price); 
    }
  }

  const shouldQuantityBeReduced = (): boolean => {
    return quantity > 0 ? true: false;
  }

  return (
    <li className={'items '+oddOrEven}>
      <div className="infoWrap"> 
        <div className="cartSection">
            
          <div className="itemImg" style={{
            backgroundImage: `url('${imagePath}')`
          }}></div>

          <h3>{name}</h3>
      
        </div>  

        <div className="quantityStock">
          <div className="quantityManager">
            <div onClick={reduceQuantity}><i className="fas fa-minus"></i></div>
            <input type="text" className="qty" min="0" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
            <div onClick={addQuantity}><i className="fas fa-plus"></i></div>
            
            x {`${price}€`}
            
          </div>
      
      
        </div>
        <p className="stockStatus in">In Stock</p>
        
        <div className="prodTotal cartSection">
          <p>{totalPrice}€</p>
        </div>
        <div className="cartSection removeWrap">
          <button><i className="remove far fa-times-circle fa-2x"></i></button>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;