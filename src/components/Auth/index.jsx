import React from 'react';

import SignUpForm from '../SignUpForm';
import LoginForm from '../../containers/LoginForm';
import { FirebaseContext } from '../Firebase';

const Auth = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => (
        <div>
          <SignUpForm firebase={firebase} />
          <LoginForm firebase={firebase} />
        </div>
      )}
    </FirebaseContext.Consumer>
  </div>
);

export default Auth;
