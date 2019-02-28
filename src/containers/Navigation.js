import { connect } from 'react-redux';

import Navigation from '../components/Navigation';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Navigation);
