import React from 'react';

import Button from '../Button';

const LogoutButton = (props) => {
  const logout = async () => {
    try {
      await props.firebase.doSignOut();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Button onClick={logout}>Logout</Button>
  );
};

export default LogoutButton;
