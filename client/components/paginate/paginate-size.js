import React from 'react';
import PropTypes from 'prop-types';

const PaginateSize = ({ text, handlePageSize }) => (
  <div className="paginate">
    <label htmlFor="pag-size">{text}</label>
    <input type="number" min="1" id="pag-size" onChange={handlePageSize} />
  </div>
);

PaginateSize.propTypes = {
  text: PropTypes.string.isRequired,
  handlePageSize: PropTypes.func.isRequired,
};

export default PaginateSize;
