import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { signOut } from 'src/firebase/auth';
import { MAIN } from 'src/constants/routes';

import Button from 'src/components/Button';

const LogoutButton = ({ history }) => {
  const logout = async () => {
    try {
      await signOut();
      history.push(MAIN);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Button onClick={logout} className="logout-button">Logout</Button>
  );
};

LogoutButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(LogoutButton);
