import { connect } from 'react-redux';

import { signInRequest } from 'src/actions';
import LoginForm from 'src/components/LoginForm';

const mapDispatchToProps = { signInRequest };

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm);
