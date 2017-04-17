import React from 'react';

const Paginate = () => (
  <div id="paginate">
    <div className="list-title">Paginate</div>
    <input type="number" min="1" id="page" />
    <label htmlFor="page">Page</label>
    <input type="number" min="1" id="productNumber" />
    <label htmlFor="productNumber">Number of Products</label>
  </div>
);

export default Paginate;
