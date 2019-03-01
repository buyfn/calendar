import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import config from '../../firebaseConfig';

if (!app.apps.length) {
  app.initializeApp(config);
}

export const auth = app.auth();
export const db = app.database();
