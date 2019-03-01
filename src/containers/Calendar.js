import { connect } from 'react-redux';

import Calendar from 'src/components/Calendar';

const mapStateToProps = state => ({
  loggedTime: state.loggedHours,
});

export default connect(mapStateToProps)(Calendar);
