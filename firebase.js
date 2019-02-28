import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import config from './firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    return this.auth.signOut();
  }

  user(uid) {
    return this.db.ref(`users/${uid}`);
  }

  timeEntry(uid, date) {
    return this.db.ref(`loggedTime/${uid}/${date}`);
  }

  loggedTime(uid) {
    return this.db.ref(`loggedTime/${uid}`);
  }
}

export default Firebase;
