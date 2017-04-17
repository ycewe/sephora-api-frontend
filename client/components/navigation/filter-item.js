import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ filter, text, handleToggle }) => (
  <li className="filter-item">
    <input type="checkbox" id={filter} value={text} onChange={handleToggle} />
    <label htmlFor={filter}>{text}</label>
  </li>
);

FilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default FilterItem;
