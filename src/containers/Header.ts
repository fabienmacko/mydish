import { connect } from 'react-redux';

import {Dish} from '../../interfaces';
import Header from '../components/Client/Header';
import {StateInterface} from '../store/reducer';


const mapStateToProps = (state: StateInterface) => ({
  cart: state.cart,
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);