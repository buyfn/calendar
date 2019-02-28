import React from 'react';
import PropTypes from 'prop-types';
import { isValid, parse } from 'date-fns';

import './NewEntry.css';
import { MAIN } from '../../constants/routes';
import Slider from '../Slider';
import DateInput from '../DateInput/DateInput';

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
      <Slider
        key="hoursInput"
        value={hoursInput}
        name="hoursInput"
        min="0"
        max="24"
        onChange={handleInput}
      >
        Hours:
      </Slider>

      <DateInput
        label="Date: "
        onChange={handleInput}
        name="selectedDate"
      />

      <button
        type="submit"
        disabled={!isValid(parse(selectedDate))}
      >
        Log time
      </button>
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
