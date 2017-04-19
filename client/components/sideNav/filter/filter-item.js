import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ filter, text, handleToggle, type }) => (
  <li className="filter-item">
    <input type={type} name={type} id={filter} value={text} onChange={handleToggle} />
    <label htmlFor={filter} className="filter-item">{text}</label>
  </li>
);

FilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default FilterItem;
