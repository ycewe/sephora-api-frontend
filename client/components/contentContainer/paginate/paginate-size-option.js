import React from 'react';
import PropTypes from 'prop-types';

const PaginateSizeOption = ({ value, text }) => (
  <option value={value}>{text}</option>
);

PaginateSizeOption.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PaginateSizeOption;
