import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const LoginForm = ({ signInRequest }) => (
  <div className="login">
    <h2>Login</h2>

    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        signInRequest(values.email, values.password);
        setSubmitting(false);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Password"
          />

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      )}
    </Formik>
  </div>
);

LoginForm.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

export default LoginForm;
