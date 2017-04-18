import React from 'react';
import PropTypes from 'prop-types';
import PaginateOffset from './paginate-offset';
import PaginateSize from './paginate-size';

class PaginateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: '1',
      size: '25',
    };

    this.handlePageSize = ::this.handlePageSize;
    this.handlePageOffset = ::this.handlePageOffset;
  }

  handlePageSize(e) {
    this.setState({ size: e.target.value });
    this.props.setPaginations(this.state.offset, e.target.value);
  }

  handlePageOffset(e) {
    this.setState({ offset: e.target.value });
    this.props.setPaginations(e.target.value, this.state.size);
  }

  render() {
    return (
      <div id="paginate">
        <div className="list-title">Paginate</div>
        <PaginateSize inputType="pag-size" text="Number of Products" handlePageSize={this.handlePageSize} />
        <PaginateOffset inputType="pag-page" handlePageOffset={this.handlePageOffset} />
      </div>
    );
  }
}

PaginateContainer.propTypes = {
  setPaginations: PropTypes.func.isRequired,
};

export default PaginateContainer;
