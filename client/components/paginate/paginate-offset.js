import React from 'react';
import PropTypes from 'prop-types';

const PaginateOffset = ({ handlePageOffset }) => (
  <div className="paginate">
    <label htmlFor="pag-offset">Page :</label>
    <input type="number" min="1" id="pag-offset" onChange={handlePageOffset} />
  </div>
);

PaginateOffset.propTypes = {
  handlePageOffset: PropTypes.func.isRequired,
};

export default PaginateOffset;
