import React from 'react';
import { connect } from 'react-redux';

import LogoutLink from '../LogoutLink';
import { FirebaseContext } from '../Firebase';

const Navigation = ({ currentUser }) => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => (
        <div>
          {currentUser
            ? (
              <div>
                <LogoutLink firebase={firebase} />
                <p>{currentUser.email}</p>
              </div>
            )
            : ''}
        </div>
      )
      }
    </FirebaseContext.Consumer>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(
  mapStateToProps,
  null,
)(Navigation);
