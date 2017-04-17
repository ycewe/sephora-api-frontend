import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './filter-item';
import PriceConstants from '../../constants/priceConstants';

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
    };

    this.handleToggle = ::this.handleToggle;
  }

  handleToggle(e) {
    console.log(e.target);
    this.props.setFilter(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="list-title">Price</div>
        <ul id="price-filter">
          <FilterItem filter="under-25" text={`${PriceConstants.under25 / 100}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="under-50" text={`${PriceConstants.under50 / 100}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="under-100" text={`${PriceConstants.under100 / 100}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="under-150" text={`${PriceConstants.under150 / 100}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="under-300" text={`${PriceConstants.under300 / 100}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="under-1000" text={`${PriceConstants.under1000 / 100}`} handleToggle={this.handleToggle} type="radio" />
        </ul>
      </div>
    );
  }
}

PriceFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default PriceFilter;
