import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCategory = ({ link, text }) => (
  <li className="product-category">
    <Link className="link" to={link}>{text}</Link>
  </li>
);

ProductCategory.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProductCategory;
