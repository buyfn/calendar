import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';
import LogoutLink from '../LogoutLink';
import { FirebaseContext } from '../Firebase';

const Navigation = ({ currentUser }) => (
  <div className="navigation">
    <FirebaseContext.Consumer>
      {firebase => (
        currentUser
          ? (
            <div>
              <span className="current-user-email">
                {currentUser.email}
              </span>

              <LogoutLink firebase={firebase} />
            </div>
          )
          : ''
      )
      }
    </FirebaseContext.Consumer>
  </div>
);

Navigation.propTypes = {
  currentUser: PropTypes.object,
};

Navigation.defaultProps = {
  currentUser: null,
};

export default Navigation;
