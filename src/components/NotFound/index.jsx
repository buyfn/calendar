import React from 'react';
import { Link } from 'react-router-dom';

import { MAIN } from '../../constants/routes';

const NotFound = () => (
  <div>
    <h1>Page not found</h1>
    <Link to={MAIN}>Back home</Link>
  </div>
);

export default NotFound;
