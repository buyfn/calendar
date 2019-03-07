import isEmail from 'validator/lib/isEmail';

export const validatePassword = password => (password.length < 6
  ? 'Should be at least 6 characters long'
  : '');

export const validateEmail = email => (!isEmail(email)
  ? 'Should be a valid email'
  : '');
