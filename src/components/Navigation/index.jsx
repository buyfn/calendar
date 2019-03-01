import React from 'react';
import PropTypes from 'prop-types';

import LogoutLink from 'src/components/LogoutLink';
import Logo from 'src/components/Logo';
import './Navigation.css';

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
