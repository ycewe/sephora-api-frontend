import React from 'react';
import PropTypes from 'prop-types';
import PaginateSizeOption from './paginate-size-option';
import PageConstants from '../constants/pageConstants';

const PaginateSize = ({ text, handlePageSize, value }) => (
  <div className="paginate-input">
    <label htmlFor="pag-size">{text}</label>
    <select id="pag-size" value={value} onChange={handlePageSize}>
      <PaginateSizeOption text={PageConstants.option10} value={PageConstants.option10} />
      <PaginateSizeOption text={PageConstants.option25} value={PageConstants.option25} />
      <PaginateSizeOption text={PageConstants.option50} value={PageConstants.option50} />
      <PaginateSizeOption text={PageConstants.option100} value={PageConstants.option100} />
    </select>
  </div>
);

PaginateSize.propTypes = {
  text: PropTypes.string.isRequired,
  handlePageSize: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PaginateSize;
