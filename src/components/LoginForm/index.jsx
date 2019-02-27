import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../../actions/index';

const handleInput = props => ({ target }) => {
  props.updateInput(target.name, target.value);
};

const handleSubmit = props => async (event) => {
  event.preventDefault();

  try {
    await props.firebase.doSignInWithEmailAndPassword(
      props.loginEmail,
      props.loginPassword,
    );
  } catch (err) {
    alert(err.message);
  }
};

const LoginForm = props => (
  <div className="login">
    <h2>Login</h2>

    <form className="login-form" onSubmit={handleSubmit(props)}>
      <input
        name="loginEmail"
        value={props.loginEmail}
        onChange={handleInput(props)}
        type="text"
        placeholder="Email"
      />

      <input
        name="loginPassword"
        value={props.loginPassword}
        onChange={handleInput(props)}
        type="password"
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  </div>
);

const mapStateToProps = state => ({
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});

const mapDispatchToProps = { updateInput };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
