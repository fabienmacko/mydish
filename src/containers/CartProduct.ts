import { connect } from 'react-redux';

import {Dish} from '../../interfaces';
import CartProduct from '../components/Client/Cart/CartProduct';
import {StateInterface} from '../store/reducer';


const mapStateToProps = (state: StateInterface) => ({
  cart: state.cart,
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartProduct);