import React from 'react';
import PropTypes from 'prop-types';

import './Slider.scss';

const Slider = ({
  value,
  min,
  max,
  step,
  name,
  onChange,
  children,
}) => (
  <div className="slider">
    <span>{children}</span>

    <input
      className="slider-input"
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
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

Slider.defaultProps = {
  step: 1,
  value: 0,
  min: 0,
  max: 0,
  children: '',
};

export default Slider;
