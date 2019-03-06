import { connect } from 'react-redux';

import {
  setCurrentUser,
  fetchTimelogRequest,
} from 'src/actions';
import App from 'src/components/App';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = {
  setCurrentUser,
  fetchTimelogRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
