import React from 'react';
import PropTypes from 'prop-types';

const PaginateSize = ({ inputType, text, handlePageSize }) => (
  <div className="paginate">
    <input type="number" min="1" id={inputType} onChange={handlePageSize} />
    <label htmlFor={inputType}>{text}</label>
  </div>
);

PaginateSize.propTypes = {
  inputType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handlePageSize: PropTypes.func.isRequired,
};

export default PaginateSize;
