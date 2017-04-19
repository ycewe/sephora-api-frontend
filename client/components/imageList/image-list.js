import React from 'react';
import PropTypes from 'prop-types';

const ImageList = ({ images }) => (
  <div id="image-list-body">
    {
      images.map(product =>
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

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageList;
