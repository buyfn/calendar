import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { signOutRequest } from 'src/actions';
import LogoutLink from 'src/components/LogoutLink';

const mapDispatchToProps = { signOutRequest };

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withRouter,
)(LogoutLink);
