import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import config from '../../firebase';

firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful.
  // Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

// class SignInScreen extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>My App</h1>
//         <p>Please sign-in:</p>
//         <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//       </div>
//     );
//   }
// }

const Auth = () => (
  <div>
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()}
    />
  </div>
);

export default Auth;
