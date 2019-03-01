import React from 'react';

import './Auth.css';
import SignUpForm from '../../containers/SignUpForm';
import LoginForm from '../../containers/LoginForm';

const Auth = () => (
  <div className="auth-form">
    <SignUpForm />
    <LoginForm />
  </div>
);

export default Auth;
