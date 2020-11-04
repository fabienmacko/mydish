import { connect } from 'react-redux';

import Menu from '../components/Client/Menu';

const mapStateToProps = state => ({
  food: state.food,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);