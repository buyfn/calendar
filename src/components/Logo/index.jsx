import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ companyName }) => (
  <div className="logo">
    {companyName}
  </div>
);

Logo.propTypes = {
  companyName: PropTypes.string.isRequired,
};

export default Logo;
