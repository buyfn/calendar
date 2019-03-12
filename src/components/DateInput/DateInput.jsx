import React from 'react';
import PropTypes from 'prop-types';

import './DateInput.scss';

const DateInput = ({
  onChange,
  label,
  name,
}) => (
  <div className="date-input">
    <span className="date-input-label">
      {label}
    </span>

    <input
      type="date"
      name={name}
      onChange={onChange}
    />
  </div>
);

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

DateInput.defaultProps = {
  label: '',
};

export default DateInput;
