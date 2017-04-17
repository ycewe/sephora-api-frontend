import React from 'react';
import FilterItem from './filter-item';

const PriceFilter = () => (
  <div>
    <div className="list-title">Price</div>
    <ul id="price-filter">
      <FilterItem filter="under-25" text="Under $25" />
      <FilterItem filter="25-50" text="$25 - $50" />
      <FilterItem filter="50-100" text="$50 - $100" />
      <FilterItem filter="100-150" text="$100 - $150" />
      <FilterItem filter="150-300" text="$150 - $300" />
      <FilterItem filter="above-300" text="Above $300" />
    </ul>
  </div>
);

export default PriceFilter;
