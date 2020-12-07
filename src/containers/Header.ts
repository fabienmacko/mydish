import { connect } from 'react-redux';

import {Dish} from '../../interfaces';
import Header from '../components/Client/Header';
import {updateCart, StateInterface} from '../store/reducer';


const mapStateToProps = (state: StateInterface) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: any) => ({
  // updateCart: (newCart: Dish[]) => {
  //   dispatch(updateCart(newCart))
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);