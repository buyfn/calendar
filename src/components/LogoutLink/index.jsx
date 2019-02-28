import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from '../Button';
import { MAIN } from '../../constants/routes';

const LogoutButton = ({ firebase, history }) => {
  const logout = async () => {
    try {
      await firebase.doSignOut();
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
  firebase: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(LogoutButton);
