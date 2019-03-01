import React from 'react';
import { Formik } from 'formik';

import { signIn } from 'src/firebase/auth';

const LoginForm = () => (
  <div className="login">
    <h2>Login</h2>

    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await signIn(values.email, values.password);
        } catch (err) {
          alert(err.message);
        }

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

export default LoginForm;
