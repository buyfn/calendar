import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className }) => (
  <button type="button" onClick={onClick} className={className}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
