import { connect } from 'react-redux';

import {CartProductInterface} from '../../interfaces';
import Product from '../components/Client/Product';
import {addNewItemToCart, StateInterface} from '../store/reducer';


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
)(Product);