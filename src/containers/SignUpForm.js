import { connect } from 'react-redux';

import { signUpRequest } from 'src/actions';
import SignUpForm from 'src/components/SignUpForm';

const mapStateToProps = state => ({
  signUpError: state.signUpError,
});

const mapDispatchToProps = { signUpRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
