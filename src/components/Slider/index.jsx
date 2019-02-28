import React from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

const Slider = ({
  value,
  min,
  max,
  step,
  name,
  onChange,
}) => (
  <div>
    <input
      className="slider"
      type="range"
      name={name}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
    />
    <span className="slider-label">{value}</span>
  </div>
);

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  step: 1,
  value: '0',
  min: '0',
  max: '100',
};

export default Slider;
