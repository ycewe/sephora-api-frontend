import React from 'react';
import ProductCategory from './product-category';

const ProductNav = () => (
  <div>
    <div className="list-title">Products</div>
    <ul id="product-nav">
      <ProductCategory link="/" text="All" />
      <ProductCategory link="/" text="Tools" />
      <ProductCategory link="/" text="Brushes" />
      <ProductCategory link="/" text="Markup" />
    </ul>
  </div>
);

export default ProductNav;
