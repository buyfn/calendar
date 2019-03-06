import React from 'react';
import PropTypes from 'prop-types';

import { MAIN } from 'src/constants/routes';

import Button from 'src/components/Button';

const LogoutButton = ({ history, signOutRequest }) => {
  const logout = () => {
    signOutRequest();
    history.push(MAIN);
  };

  return (
    <Button onClick={logout} className="logout-button">Logout</Button>
  );
};

LogoutButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  signOutRequest: PropTypes.func.isRequired,
};

export default LogoutButton;
