import { connect } from 'react-redux';

import {CartProductInterface} from '../../interfaces';
import CartProduct from '../components/Client/Cart/CartProduct';
import {StateInterface, addNewItemToCart, removeItemFromCart, removeItemsFromCart} from '../store/reducer';


const mapStateToProps = (state: StateInterface) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: any) => ({
  addNewItemToCart: (newItem: CartProductInterface[]) => {
    dispatch(addNewItemToCart(newItem));
  },

  removeItemFromCart: (idOfItemToRemove: string) => {
    dispatch(removeItemFromCart(idOfItemToRemove));
  },

  removeItemsFromCart: (idOfItemsToRemove: string) => {
    dispatch(removeItemsFromCart(idOfItemsToRemove));
  },
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartProduct);