import React, {useState} from 'react';

import {addProduct, getUniqueProducts, getProductById, removeProduct, removeAllProductsWithId} from '../../../../utils/localStorageProducts';
import {Dish} from '../../../../utils/localStorageProducts';

type CartProductInterface = {
  oddOrEven: string,
  id: string,
  name: string,
  price: number,
  imagePath: string,
  setProductsToDisplay: any,
  setCommandTotalPrice: any,
  commandTotalPrice: number | undefined
}

const CartProduct = ({commandTotalPrice, setCommandTotalPrice, setProductsToDisplay, oddOrEven, id, name, price, imagePath}: CartProductInterface) => {
  
  const productQuantity = getProductById(id).length;
  // State

  const [quantity, setQuantity] = useState(productQuantity);
  const [productTotalPrice, setProductTotalPrice] = useState(quantity * price);
  
  const addQuantity = () => {
    addProduct({id, name, price, imagePath});
    setQuantity(quantity + 1);
    setProductTotalPrice((quantity + 1) * price);
    setCommandTotalPrice(commandTotalPrice! + price);
  }

  const reduceQuantity = () => {
    if (shouldQuantityBeReduced()) {
      removeProduct(id);
      setQuantity(quantity - 1);
      setProductTotalPrice((quantity - 1) * price);
      setCommandTotalPrice(commandTotalPrice! - price);
    }
  }

  const shouldQuantityBeReduced = (): boolean => {
    return quantity > 1 ? true: false;
  }

  const deleteProductFromCart = () => {
    var newCart = getUniqueProducts()!.filter((dish: Dish) => dish.id !== id);
    setProductsToDisplay(newCart);
    removeAllProductsWithId(id);
    setCommandTotalPrice(commandTotalPrice! - (price * quantity))
  }

  return (
    <li className={'items '+oddOrEven}>
      <div className="infoWrap"> 
        <div className="cartSection title">
            
          <div className="itemImg" style={{
            backgroundImage: `url('${imagePath}')`
          }}></div>

          <h3>{name}</h3>
      
        </div>  

        <div className="cartSection">
          <div className="quantityStock">
            <div className="quantityManager">
              <button onClick={reduceQuantity}><i className="fas fa-minus"></i></button>
              <input readOnly type="text" className="qty" min="0" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
              <button onClick={addQuantity}><i className="fas fa-plus"></i></button>
              
              x {`${price}€`}
              
            </div>
        
        
          </div>
          <p className="stockStatus in">In Stock</p>
          
          <div className="prodTotal cartSection">
            <p>{productTotalPrice}€</p>
          </div>
          <div className="cartSection removeWrap">
            <button className="deleteCartItem" onClick={deleteProductFromCart}><i className="remove far fa-times-circle fa-2x"></i></button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;