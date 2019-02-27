import React from 'react';
// import PropTypes from 'prop-types';

const handleInput = (event) => {
  console.log(event.target.name);
};

const handleSubmit = ({ firebase }) => async (event) => {
  event.preventDefault();

  // await firebase.doCreateUserWithEmailAndPassword();
};

const SignUpForm = props => (
  <form className="signup-form" onSubmit={handleSubmit(props)}>
    <input
      name="email"
      // value={email}
      onChange={handleInput}
      type="text"
      placeholder="Email"
    />

    <input
      name="password"
      // value={passwordOne}
      onChange={handleInput}
      type="password"
      placeholder="Password"
    />

    <button type="submit">Sign up</button>
  </form>
);

export default SignUpForm;
