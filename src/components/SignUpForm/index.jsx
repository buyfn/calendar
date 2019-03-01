import React from 'react';
import { Formik } from 'formik';

import { createUser } from 'src/firebase/auth';
import { user } from 'src/firebase/api';

const SignUpForm = () => (
  <div className="signup">
    <h2>Sign up</h2>

    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const { user: { uid } } = await createUser(
            values.email,
            values.password,
          );

          user(uid).set({
            email: values.email,
          });
        } catch (err) {
          alert(err.message);
        }

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

export default SignUpForm;
