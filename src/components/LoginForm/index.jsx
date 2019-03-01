import React from 'react';
import PropTypes from 'prop-types';

import { signIn } from '../../firebase/auth';

const LoginForm = ({
  loginEmail,
  loginPassword,
  updateInput,
}) => {
  const handleInput = ({ target }) => {
    updateInput(target.name, target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signIn(
        loginEmail,
        loginPassword,
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="loginEmail"
          value={loginEmail}
          onChange={handleInput}
          type="text"
          placeholder="Email"
        />

        <input
          name="loginPassword"
          value={loginPassword}
          onChange={handleInput}
          type="password"
          placeholder="Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  loginEmail: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default LoginForm;
