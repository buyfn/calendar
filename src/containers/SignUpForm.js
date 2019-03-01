import { connect } from 'react-redux';

import { updateInput } from 'src/actions';
import SignUpForm from 'src/components/SignUpForm';

const mapStateToProps = state => ({
  signUpEmail: state.signUpEmail,
  signUpPassword: state.signUpPassword,
});

const mapDispatchToProps = { updateInput };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
