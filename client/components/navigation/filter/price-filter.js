import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './filter-item';
import PriceConstants from '../../constants/priceConstants';

/**
  * Handles filtering of prices
  */
class PriceFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
    };

    this.handleToggle = ::this.handleToggle;
  }

  handleToggle(e) {
    this.props.setFilter(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="list-title">Price</div>
        <ul id="price-filter">
          <FilterItem filter="option1" text={`${PriceConstants.under15 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="option2" text={`${PriceConstants.under30 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="option3" text={`${PriceConstants.under50 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="option4" text={`${PriceConstants.under100 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="option5" text={`${PriceConstants.under250 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
          <FilterItem filter="option6" text={`${PriceConstants.under1000 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
        </ul>
      </div>
    );
  }
}

PriceFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default PriceFilter;
