import { connect } from 'react-redux';

import { signInRequest } from 'src/actions';
import LoginForm from 'src/components/LoginForm';

const mapStateToProps = state => ({
  signInError: state.signInError,
});

const mapDispatchToProps = { signInRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
