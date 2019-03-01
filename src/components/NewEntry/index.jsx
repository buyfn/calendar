import React from 'react';
import PropTypes from 'prop-types';
import { isValid, parse } from 'date-fns';

import { timeEntry } from 'src/firebase/api';
import { MAIN } from 'src/constants/routes';

import Slider from 'src/components/Slider';
import DateInput from 'src/components/DateInput/DateInput';
import './NewEntry.css';

const NewEntry = ({
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
      await timeEntry(
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

NewEntry.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  uid: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  hoursInput: PropTypes.string.isRequired,
  addEntry: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default NewEntry;
