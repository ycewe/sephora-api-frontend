import React from 'react';
import data from '../../database/data.json';

const ImageLoader = () => (
  <div id="image-loader-body">
    {
      data.data.map(product =>
        <div key={product.id} id="product">
          <img src="http://placehold.it/150x150" alt={product.attributes.name} />
          <div id="product-name">{product.attributes.name}</div>
          <div id="product-category">{product.attributes.category}</div>
          <div id="product-price">${product.attributes.price / 100}</div>
        </div>,
      )
    }
  </div>
);

export default ImageLoader;
