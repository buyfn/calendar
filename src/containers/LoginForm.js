import { connect } from 'react-redux';

import { updateInput } from 'src/actions';
import LoginForm from 'src/components/LoginForm';

const mapStateToProps = state => ({
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});

const mapDispatchToProps = { updateInput };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
