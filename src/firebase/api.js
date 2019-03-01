import { db } from './firebase';

export const user = uid => db.ref(`users/${uid}`);

export const timeEntry = (uid, date) => db.ref(`loggedTime/${uid}/${date}`);

export const loggedTime = uid => db.ref(`loggedTime/${uid}`);
