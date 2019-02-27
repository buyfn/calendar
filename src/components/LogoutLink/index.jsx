import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../Button';
import { MAIN } from '../../constants/routes';

const LogoutButton = (props) => {
  const logout = async () => {
    try {
      await props.firebase.doSignOut();
      props.history.push(MAIN);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Button onClick={logout}>Logout</Button>
  );
};

export default withRouter(LogoutButton);
