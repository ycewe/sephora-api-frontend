import React from 'react';
import PropTypes from 'prop-types';

const PaginateOffset = ({ inputType, handlePageOffset }) => (
  <div className="paginate">
    <label htmlFor={inputType}>Page :</label>
    <input type="number" min="1" id={inputType} onChange={handlePageOffset} />
  </div>
);

PaginateOffset.propTypes = {
  inputType: PropTypes.string.isRequired,
  handlePageOffset: PropTypes.func.isRequired,
};

export default PaginateOffset;
