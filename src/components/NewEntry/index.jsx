import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { compose } from 'redux';
import { addEntry, updateInput } from '../../actions';
import { MAIN } from '../../constants/routes';

const NewEntry = (props) => {
  const handleInput = ({ target }) => {
    props.updateInput(target.name, target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await props.firebase.timeEntry(
      props.uid,
      props.selectedDate,
    ).set({
      hours: props.hoursInput,
    });

    props.history.push(MAIN);
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

const mapStateToProps = state => ({
  uid: state.currentUser.uid,
  selectedDate: state.selectedDate,
  hoursInput: state.hoursInput,
});

const mapDispatchToProps = { addEntry, updateInput };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(NewEntry);
