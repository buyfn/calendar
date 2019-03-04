import React from 'react';
import PropTypes from 'prop-types';
import { isValid, parse } from 'date-fns';
import { Formik } from 'formik';

import { timeEntry } from 'src/firebase/api';
import { MAIN } from 'src/constants/routes';

import Slider from 'src/components/Slider';
import DateInput from 'src/components/DateInput/DateInput';
import './NewEntry.css';

const NewEntry = ({
  history,
  addEntry,
  uid,
}) => (
  <Formik
    initialValues={{ hours: 0, date: '' }}
    onSubmit={async (values) => {
      try {
        const hoursString = String(values.hours);

        await timeEntry(uid, values.date).set(hoursString);
        addEntry(values.date, hoursString);
      } catch (err) {
        alert(err);
      }
      history.push(MAIN);
    }}
  >
    {({
      values,
      handleSubmit,
      handleChange,
    }) => (
      <form className="new-entry" onSubmit={handleSubmit}>
        <Slider
          key="hours"
          value={values.hours}
          name="hours"
          min={0}
          max={24}
          onChange={handleChange}
        >
            Hours:
        </Slider>

        <DateInput
          label="Date: "
          onChange={handleChange}
          name="date"
        />

        <button
          type="submit"
          disabled={!isValid(parse(values.date))}
        >
            Log time
        </button>
      </form>
    )}
  </Formik>
);
NewEntry.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  uid: PropTypes.string.isRequired,
  addEntry: PropTypes.func.isRequired,
};

export default NewEntry;
