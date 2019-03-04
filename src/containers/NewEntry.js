import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { addEntry } from 'src/actions';
import NewEntry from 'src/components/NewEntry';

const mapStateToProps = state => ({
  uid: state.currentUser.uid,
  selectedDate: state.selectedDate,
  hoursInput: state.hoursInput,
});

const mapDispatchToProps = { addEntry };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(NewEntry);
