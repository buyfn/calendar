import { connect } from 'react-redux';

import { signUpRequest } from 'src/actions';
import SignUpForm from 'src/components/SignUpForm';

const mapDispatchToProps = { signUpRequest };

export default connect(
  null,
  mapDispatchToProps,
)(SignUpForm);
