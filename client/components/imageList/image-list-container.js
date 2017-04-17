import React from 'react';
import fetch from 'node-fetch';
import ImageList from './image-list';

class ImageListContainer extends React.Component {
  state = {
    images: [],
  };

  componentDidMount() {
    fetch('https://sephora-api-frontend-test.herokuapp.com/products')
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

export default ImageListContainer;
