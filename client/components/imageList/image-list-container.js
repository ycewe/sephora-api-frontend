import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import ImageList from './image-list';

class ImageListContainer extends React.Component {
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
    if (nextProps.filters.length === 1) {
      // filter where category is equal to filter
      this.fetchData(`https://sephora-api-frontend-test.herokuapp.com/products?filter[category_eq]=${nextProps.filters[0]}`);
    } else if (nextProps.filters.length > 1) {
      // filter where category is either filters
      this.fetchData(`https://sephora-api-frontend-test.herokuapp.com/products?filter[category_in]=${nextProps.filters.toString()}`);
    } else {
      // default
      this.fetchData('https://sephora-api-frontend-test.herokuapp.com/products');
    }
  }

  /**
    * fetch data via API
    * @param url - route to data
    */
  fetchData(url) {
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
};

export default ImageListContainer;
