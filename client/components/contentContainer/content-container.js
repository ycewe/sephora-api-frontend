import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ImageListContainer from '../imageList/image-list-container';
import PaginateContainer from '../paginate/paginate-container';

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paginations: [],
      pageLinks: {},
    };

    this.setPaginations = ::this.setPaginations;
    this.setPageRange = ::this.setPageRange;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (_.isEqual(this.props, nextProps) && _.isEqual(this.state, nextState)) {
      return false;
    }

    return true;
  }

  /**
    * Handler to determine the selected pagination
    * @param  pageOffset - current page
    *         pageSize - current display size
    */
  setPaginations(pageOffset, pageSize) {
    const paginations = [pageOffset, pageSize];
    this.setState({ paginations });
  }

  /**
    * Retrieves page links information from data
    * and pass to paginate component
    * @param  pageLinks - links to prev/next/last/start pages
    */
  setPageRange(pageLinks) {
    this.setState({ pageLinks });
  }

  render() {
    return (
      <div id="content-body">
        <PaginateContainer
          setPaginations={this.setPaginations}
          pageRange={this.state.pageLinks}
        />
        <ImageListContainer
          categoryFilters={this.props.categoryFilters}
          priceFilters={this.props.priceFilters}
          sort={this.props.sort}
          paginations={this.state.paginations}
          setPageRange={this.setPageRange}
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
