import { connect } from 'react-redux';

import {Dish} from '../../interfaces';
import Nav from '../components/Client/Nav';
import {StateInterface} from '../store/reducer';


const mapStateToProps = (state: StateInterface) => ({
  cart: state.cart,
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);