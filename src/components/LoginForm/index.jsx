import React from 'react';
import PropTypes from 'prop-types';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

import {
  validatePassword,
  validateEmail,
} from 'src/validation';

const LoginForm = ({ signInRequest, signInError }) => (
  <div className="login">
    <h2>Login</h2>

    <Formik
      initialValues={{ email: '', password: '' }}
      validate={({ email, password }) => {
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        return ({
          ...(emailError ? { email: emailError } : {}),
          ...(passwordError ? { password: passwordError } : {}),
        });
      }}
      onSubmit={(values) => {
        signInRequest(values.email, values.password);
      }}
    >
      {() => (
        <Form className="form">
          <div className="form-field">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error"
            />
          </div>

          <div className="form-field">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="form-input"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error"
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>

    <div className="error">{signInError}</div>
  </div>
);

LoginForm.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

export default LoginForm;
