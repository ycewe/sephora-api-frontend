import React from 'react';
import PropTypes from 'prop-types';
import ImageListContainer from '../imageList/image-list-container';
import PaginateContainer from '../paginate/paginate-container';

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paginations: [],
    };

    this.setPaginations = ::this.setPaginations;
  }

  // handler to determine the selected pagination
  setPaginations(pageOffset, pageSize) {
    const paginations = [pageOffset, pageSize];
    this.setState({ paginations });
  }

  render() {
    return (
      <div id="content-body">
        <PaginateContainer setPaginations={this.setPaginations} />
        <ImageListContainer
          categoryFilters={this.props.categoryFilters}
          priceFilters={this.props.priceFilters}
          sort={this.props.sort}
          paginations={this.state.paginations}
        />
      </div>
    );
  }
}

ContentBody.propTypes = {
  categoryFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  priceFilters: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default ContentBody;
