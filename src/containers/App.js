import { connect } from 'react-redux';

import { setCurrentUser, setLoggedTime } from 'src/actions';
import App from 'src/components/App';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = { setCurrentUser, setLoggedTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
