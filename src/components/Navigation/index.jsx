import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';
import LogoutLink from '../LogoutLink';
import Logo from '../Logo';

const Navigation = ({ currentUser }) => (
  <div className="navigation">
    <Logo companyName="ООО &laquo;Произвольное&raquo;" />
    {currentUser
      ? (
        <div>
          <span className="current-user-email">
            {currentUser.email}
          </span>

          <LogoutLink />
        </div>
      )
      : ''}
  </div>
);

Navigation.propTypes = {
  currentUser: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Navigation.defaultProps = {
  currentUser: null,
};

export default Navigation;
