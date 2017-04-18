import React from 'react';
import PropTypes from 'prop-types';

const SortOption = ({ value, text }) => (
  <option value={value}>{text}</option>
);

SortOption.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SortOption;
