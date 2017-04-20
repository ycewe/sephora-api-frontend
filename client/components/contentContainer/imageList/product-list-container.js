/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import ProductList from './product-list';
import SortConstants from '../../constants/sortConstants';
import PriceConstants from '../../constants/priceConstants';
import UrlConstants from '../../constants/urlConstants';

/**
  * Wrapper to make HTTP calls to fetch data
  */
class ProductListContainer extends React.Component {
  static getCategoryFilterUrl(filters) {
    if (filters.length === 1) {
      // filter where category is equal to filter
      return `${UrlConstants.category_equal}${filters[0]}&`;
    } else if (filters.length > 1) {
      // filter where category is either filters
      return `${UrlConstants.category_either}${filters.toString()}&`;
    }

    return '';
  }

  static getPriceFilterUrl(filters) {
    if (filters) {
      return `${UrlConstants.price_less_than}${filters * PriceConstants.divisor}&`;
    }

    return '';
  }

  static getSortUrl(sort) {
    if (sort && sort !== SortConstants.none) {
      // determine how data is sorted
      return `${UrlConstants.sort}${sort}&`;
    }

    return '';
  }

  static getPaginateUrl(paginations) {
    if (paginations[0] && paginations[1]) {
      return `${UrlConstants.page_number}${paginations[0]}${UrlConstants.page_size}${paginations[1]}&`;
    }

    return '';
  }

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      links: [],
    };
  }

  componentDidMount() {
    this.fetchData(UrlConstants.main);
  }

  componentWillReceiveProps(nextProps) {
    const filterUrl = (nextProps.priceFilters === '0') ?
      ProductListContainer.getCategoryFilterUrl(nextProps.categoryFilters) :
      ProductListContainer.getPriceFilterUrl(nextProps.priceFilters);
    const sortUrl = ProductListContainer.getSortUrl(nextProps.sort);
    const paginateUrl = ProductListContainer.getPaginateUrl(nextProps.paginations);

    this.fetchData(`${UrlConstants.main}?${filterUrl}${sortUrl}${paginateUrl}`);
  }

  /**
    * fetch data via API
    * @param string - url
    */
  fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          products: json.data,
          links: json.links,  // used for testing
        });
        this.props.setPageRange(json.links);
      });
  }

  render() {
    return (
      <ProductList products={this.state.products} />
    );
  }
}

ProductListContainer.propTypes = {
  categoryFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  priceFilters: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  paginations: PropTypes.arrayOf(PropTypes.string).isRequired,
  setPageRange: PropTypes.func.isRequired,
};

export default ProductListContainer;
