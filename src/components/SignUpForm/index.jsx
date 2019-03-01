import React from 'react';
import PropTypes from 'prop-types';

import { createUser } from '../../firebase/auth';
import { user } from '../../firebase/api';

const SignUpForm = ({
  updateInput,
  signUpEmail,
  signUpPassword,
}) => {
  const handleInput = ({ target }) => {
    updateInput(target.name, target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user: { uid } } = await createUser(
        signUpEmail,
        signUpPassword,
      );

      user(uid).set({
        email: signUpEmail,
      });

      updateInput('signUpEmail', '');
      updateInput('signUpPassword', '');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signup">
      <h2>Sign up</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          name="signUpEmail"
          value={signUpEmail}
          onChange={handleInput}
          type="text"
          placeholder="Email"
        />

        <input
          name="signUpPassword"
          value={signUpPassword}
          onChange={handleInput}
          type="password"
          placeholder="Password"
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  signUpEmail: PropTypes.string.isRequired,
  signUpPassword: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default SignUpForm;
