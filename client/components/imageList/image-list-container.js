import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import ImageList from './image-list';
import SortConstants from '../constants/sortConstants';

class ImageListContainer extends React.Component {
  static getFilterUrl(filters) {
    if (filters.length === 1) {
      // filter where category is equal to filter
      return `filter[category_eq]=${filters[0]}&`;
    } else if (filters.length > 1) {
      // filter where category is either filters
      return `filter[category_in]=${filters.toString()}&`;
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
    if (paginations) {
      return `page[number]=${paginations[0]}&page[size]=${paginations[1]}&`;
    }

    return '';
  }

  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.fetchData('https://sephora-api-frontend-test.herokuapp.com/products');
  }


  componentWillReceiveProps(nextProps) {
    const filterUrl = ImageListContainer.getFilterUrl(nextProps.filters);
    const sortUrl = ImageListContainer.getSortUrl(nextProps.sort);
    const paginateUrl = ImageListContainer.getPaginateUrl(nextProps.paginations);

    this.fetchData(`https://sephora-api-frontend-test.herokuapp.com/products?${filterUrl}${sortUrl}${paginateUrl}`);
  }

  /**
    * fetch data via API
    * @param url - route to data
    */
  fetchData(url) {
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          images: json.data,
        }),
      );
  }

  render() {
    return (
      <ImageList images={this.state.images} />
    );
  }
}

ImageListContainer.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  sort: PropTypes.string.isRequired,
  paginations: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ImageListContainer;
