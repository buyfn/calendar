import React from 'react';
import PropTypes from 'prop-types';

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

Navigation.propTypes = {
  currentUser: PropTypes.object,
};

Navigation.defaultProps = {
  currentUser: null,
};

export default Navigation;
