import { connect } from 'react-redux';

import Home from '../components/Client/Home';

const mapStateToProps = state => ({
  food: state.food,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);