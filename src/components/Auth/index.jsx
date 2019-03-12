import React from 'react';

import './Auth.scss';
import SignUpForm from 'src/containers/SignUpForm';
import LoginForm from 'src/containers/LoginForm';

const Auth = () => (
  <div className="auth-form">
    <SignUpForm />
    <LoginForm />
  </div>
);

export default Auth;
