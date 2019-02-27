import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
