import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ filter, text }) => (
  <li className="filter-item">
    <input type="checkbox" id={filter} />
    <label htmlFor={filter}>{text}</label>
  </li>
);

FilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FilterItem;
