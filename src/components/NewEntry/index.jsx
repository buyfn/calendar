import React from 'react';
// import { Route } from 'react-router-dom';

// import { NEW_ENTRY } from '../../constants/routes';

const NewEntry = () => (
  <form className="new-entry">
    <input
      type="range"
      name="hours"
      min="0"
      max="24"
    />

    <button type="submit">Log time</button>
  </form>
);

export default NewEntry;
