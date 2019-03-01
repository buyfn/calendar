import React from 'react';

import './Auth.css';
import SignUpForm from 'src/components/SignUpForm';
import LoginForm from 'src/components/LoginForm';

const Auth = () => (
  <div className="auth-form">
    <SignUpForm />
    <LoginForm />
  </div>
);

export default Auth;
