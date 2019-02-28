import React from 'react';
import PropTypes from 'prop-types';

import { MAIN } from '../../constants/routes';

const NewEntry = ({
  firebase,
  history,
  addEntry,
  updateInput,
  selectedDate,
  hoursInput,
  uid,
}) => {
  const handleInput = ({ target }) => {
    updateInput(target.name, target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await firebase.timeEntry(
        uid,
        selectedDate,
      ).set(hoursInput);

      addEntry(selectedDate, hoursInput);
    } catch (err) {
      alert(err);
    }

    history.push(MAIN);
  };

  return (
    <form className="new-entry" onSubmit={handleSubmit}>
      <input
        type="range"
        name="hoursInput"
        min="0"
        max="24"
        step="1"
        onChange={handleInput}
      />

      <input
        type="date"
        name="selectedDate"
        onChange={handleInput}
      />

      <button type="submit">Log time</button>
    </form>
  );
};

/* eslint-disable react/forbid-prop-types */
NewEntry.propTypes = {
  firebase: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  hoursInput: PropTypes.string.isRequired,
  addEntry: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
};
/* eslint-enable */

export default NewEntry;
