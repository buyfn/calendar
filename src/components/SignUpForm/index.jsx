import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const SignUpForm = ({ signUpRequest }) => (
  <div className="signup">
    <h2>Sign up</h2>

    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        signUpRequest(values.email, values.password);
        setSubmitting(false);
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        isSubmitting,
      }) => (
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button type="submit" disabled={isSubmitting}>
            Sign up
          </button>
        </form>
      )}
    </Formik>
  </div>
);

SignUpForm.propTypes = {
  signUpRequest: PropTypes.func.isRequired,
};

export default SignUpForm;
