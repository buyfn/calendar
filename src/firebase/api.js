import { db } from './firebase';

export const user = (uid, email) => db.ref(`users/${uid}`).set({
  email,
});

export const timeEntry = (uid, date, hours) => db.ref(`loggedTime/${uid}/${date}`).set(hours);

export const loggedTime = uid => db.ref(`loggedTime/${uid}`).once('value');
