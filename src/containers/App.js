import { connect } from 'react-redux';

import { setCurrentUser, setLoggedTime } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = { setCurrentUser, setLoggedTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
