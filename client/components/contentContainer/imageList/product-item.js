import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ isViewAll, product, displayProduct }) => (
  <div id="product">
    <button
      id="toggle-display-btn"
      value={product.id}
      onClick={displayProduct}
    >{(isViewAll) ? 'View' : 'X'}</button>
    <img src="http://placehold.it/230x150" alt={product.attributes.name} />
    <div id="product-name">{product.attributes.name}</div>
    <div id="product-category">{product.attributes.category}</div>
    <div id="product-price">${product.attributes.price / 100}</div>
    {
      (!isViewAll) ?
        <div id="product-more-info">
          {
            (product.attributes.under_sale) ?
              <div>
                <div id="product-salePrice">Sale Price: ${product.attributes.sale_price / 100}</div>
                <div id="product-soldOut">{(product.attributes.sold_out) ? 'Sold Out' : 'On Sale'}</div>
              </div> :
              <div id="product-salePrice">Not For Sale</div>
          }
        </div> :
        <div />
    }
  </div>
);

ProductItem.propTypes = {
  isViewAll: PropTypes.bool.isRequired,
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  displayProduct: PropTypes.func.isRequired,
};

export default ProductItem;
