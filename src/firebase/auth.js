import { auth } from './firebase';

export const createUser = (email, passord) => auth.createUserWithEmailAndPassword(email, passord);

export const signIn = (email, passord) => auth.signInWithEmailAndPassword(email, passord);

export const signOut = () => auth.signOut();
