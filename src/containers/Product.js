import { connect } from 'react-redux';

import Product from '../components/Client/Product';

import { openMenu } from '../store/reducer';

const mapStateToProps = (state) => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);