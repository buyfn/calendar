import { connect } from 'react-redux';

import { updateInput } from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});

const mapDispatchToProps = { updateInput };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
