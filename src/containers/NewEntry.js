import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { addEntryRequest } from 'src/actions';
import NewEntry from 'src/components/NewEntry';

const mapStateToProps = state => ({
  uid: state.currentUser.uid,
  selectedDate: state.selectedDate,
  hoursInput: state.hoursInput,
});

const mapDispatchToProps = { addEntryRequest };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(NewEntry);
