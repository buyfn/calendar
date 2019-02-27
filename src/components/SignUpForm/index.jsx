import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../../actions/index';

const SignUpForm = (props) => {
  const handleInput = ({ target }) => {
    props.updateInput(target.name, target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { user: { uid } } = await props.firebase.doCreateUserWithEmailAndPassword(
      props.signUpEmail,
      props.signUpPassword,
    );
    props.firebase.user(uid).set({
      email: props.signUpEmail,
    });
  };

  return (
    <div className="signup">
      <h2>Sign up</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          name="signUpEmail"
          value={props.signUpEmail}
          onChange={handleInput}
          type="text"
          placeholder="Email"
        />

        <input
          name="signUpPassword"
          value={props.signUpPassword}
          onChange={handleInput}
          type="password"
          placeholder="Password"
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  signUpEmail: state.signUpEmail,
  signUpPassword: state.signUpPassword,
});

const mapDispatchToProps = { updateInput };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
