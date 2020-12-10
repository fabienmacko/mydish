import { connect } from 'react-redux';

import {CartProductInterface} from '../../interfaces';
import CartProduct from '../components/Client/Cart/CartProduct';
import {StateInterface, addNewItemToCart} from '../store/reducer';


const mapStateToProps = (state: StateInterface) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: any) => ({
  addNewItemToCart: (newItem: CartProductInterface[]) => {
    dispatch(addNewItemToCart(newItem));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartProduct);