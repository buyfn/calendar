import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { signOut } from '../../firebase/auth';

import Button from '../Button';
import { MAIN } from '../../constants/routes';

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
