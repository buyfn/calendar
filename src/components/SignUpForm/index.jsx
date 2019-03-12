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

const SignUpForm = ({ signUpRequest, signUpError }) => (
  <div className="signup">
    <h2>Sign up</h2>

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
      onSubmit={(values, { setSubmitting }) => {
        signUpRequest(values.email, values.password);
        setSubmitting(false);
      }}
    >
      {({
        isSubmitting,
      }) => (
        <Form className="signup-form">
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
            disabled={isSubmitting}
          >
            Sign up
          </button>
        </Form>
      )}
    </Formik>

    <div className="error">{signUpError}</div>
  </div>
);

SignUpForm.propTypes = {
  signUpRequest: PropTypes.func.isRequired,
  signUpError: PropTypes.string,
};
SignUpForm.defaultProps = {
  signUpError: '',
};

export default SignUpForm;
