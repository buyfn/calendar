import React from 'react';

import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';
import { FirebaseContext } from '../Firebase';
// import * as ROUTES from '../../constants/routes';

const Auth = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
    <LoginForm />
  </div>
);

export default Auth;
