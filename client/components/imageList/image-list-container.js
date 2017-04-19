/*
   eslint-disable
    react/no-unused-prop-types
*/

import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import ImageList from './image-list';
import SortConstants from '../constants/sortConstants';
import PriceConstants from '../constants/priceConstants';

/**
  * Wrapper to make HTTP calls to fetch data
  */
class ImageListContainer extends React.Component {
  static getCategoryFilterUrl(filters) {
    if (filters.length === 1) {
      // filter where category is equal to filter
      return `filter[category_eq]=${filters[0]}&`;
    } else if (filters.length > 1) {
      // filter where category is either filters
      return `filter[category_in]=${filters.toString()}&`;
    }

    return '';
  }

  static getPriceFilterUrl(filters) {
    if (filters) {
      return `filter[price_lt]=${filters * PriceConstants.divisor}&`;
    }

    return '';
  }

  static getSortUrl(sort) {
    if (sort && sort !== SortConstants.none) {
      // determine how data is sorted
      return `sort=${sort}&`;
    }

    return '';
  }

  static getPaginateUrl(paginations) {
    if (paginations[0] && paginations[1]) {
      return `page[number]=${paginations[0]}&page[size]=${paginations[1]}&`;
    }

    return '';
  }

  constructor(props) {
    super(props);

    this.state = {
      images: [],
      links: [],
    };
  }

  componentDidMount() {
    this.fetchData('https://sephora-api-frontend-test.herokuapp.com/products');
  }

  componentWillReceiveProps(nextProps) {
    const filterUrl = (nextProps.priceFilters === '0') ?
      ImageListContainer.getCategoryFilterUrl(nextProps.categoryFilters) :
      ImageListContainer.getPriceFilterUrl(nextProps.priceFilters);
    const sortUrl = ImageListContainer.getSortUrl(nextProps.sort);
    const paginateUrl = ImageListContainer.getPaginateUrl(nextProps.paginations);

    this.fetchData(`https://sephora-api-frontend-test.herokuapp.com/products?${filterUrl}${sortUrl}${paginateUrl}`);
  }

  /**
    * fetch data via API
    * @param url - route to data
    */
  fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          images: json.data,
        });
        this.props.setPageRange(json.links);
      });
  }

  render() {
    return (
      <ImageList images={this.state.images} />
    );
  }
}

ImageListContainer.propTypes = {
  categoryFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  priceFilters: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  paginations: PropTypes.arrayOf(PropTypes.string).isRequired,
  setPageRange: PropTypes.func.isRequired,
};

export default ImageListContainer;
