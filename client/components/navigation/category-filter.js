import React from 'react';
import FilterItem from './filter-item';

const CategoryFilter = () => (
  <div>
    <div className="list-title">Products</div>
    <ul id="category-filter">
      <FilterItem filter="cat-tools" text="Tools" />
      <FilterItem filter="cat-brushes" text="Brushes" />
      <FilterItem filter="cat-markup" text="Markup" />
    </ul>
  </div>
);

export default CategoryFilter;
