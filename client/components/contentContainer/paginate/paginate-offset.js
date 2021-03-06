import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import PageConstants from '../../constants/pageConstants';

/**
  * Handles page number and logic handling of page selection
  */
class PaginateOffset extends React.Component {
  /**
    * Extract the page number from the given url link
    * @param string  - url
    * @return string - currentPage
    */
  static getPageOffset(url) {
    const pageOffsetStartIndex = url.indexOf(PageConstants.offsetUrl);
    const pageSizeStartIndex = url.indexOf(PageConstants.sizeUrl);
    const pageOffsetEndIndex = PageConstants.offsetUrl.length;
    const currentPage = url.slice(
      pageOffsetStartIndex + pageOffsetEndIndex, pageSizeStartIndex);

    return currentPage;
  }

  constructor(props) {
    super(props);

    this.state = {
      currentPage: '1',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isNil(nextProps.pageRange.self)) {
      this.setState({
        currentPage: PaginateOffset.getPageOffset(nextProps.pageRange.self),
      });
    }
  }

  render() {
    const first = (!_.isNil(this.props.pageRange.first)) ?
      (<button
        value={PaginateOffset.getPageOffset(this.props.pageRange.first)}
        onClick={this.props.handlePageOffset}
        id="page-first"
        className="offset-page-btn"
      >First</button>) :
      <button className="offset-page-disable" disabled>First</button>;

    const last = (!_.isNil(this.props.pageRange.last)) ?
      (<button
        value={PaginateOffset.getPageOffset(this.props.pageRange.last)}
        onClick={this.props.handlePageOffset}
        id="page-last"
        className="offset-page-btn"
      >Last</button>) :
      <button className="offset-page-disable" disabled>Last</button>;

    const next = (!_.isNil(this.props.pageRange.next)) ?
      (<button
        value={PaginateOffset.getPageOffset(this.props.pageRange.next)}
        onClick={this.props.handlePageOffset}
        id="page-next"
        className="offset-page-btn"
      >Next</button>) :
      <button className="offset-page-disable" disabled>Next</button>;

    const prev = (!_.isNil(this.props.pageRange.prev)) ?
      (<button
        value={PaginateOffset.getPageOffset(this.props.pageRange.prev)}
        onClick={this.props.handlePageOffset}
        id="page-prev"
        className="offset-page-btn"
      >Prev</button>) :
      <button className="offset-page-disable" disabled>Prev</button>;

    return (
      <div id="paginate-btn-group">
        {first}
        {prev}
        <span id="current-page-indicator">{this.state.currentPage}</span>
        {next}
        {last}
      </div>
    );
  }
}

PaginateOffset.propTypes = {
  handlePageOffset: PropTypes.func.isRequired,
  pageRange: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PaginateOffset;
