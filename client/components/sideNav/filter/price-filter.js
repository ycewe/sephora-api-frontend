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
    this.handleSelect = ::this.handleSelect;
  }

  handleToggle(e) {
    this.props.setFilter(e.target.value);
  }

  handleSelect() {
    this.setState({
      filters: [],
    });
    this.props.handleFilterSelect();
  }

  render() {
    return (
      <div id="price-filter-container">
        <input type="radio" name="filter" id="prc-filter" onChange={this.handleSelect} checked={this.props.isDisplayed} />
        <label htmlFor="prc-filter" className="list-title">Price</label>
        {
          (this.props.isDisplayed) ?
            <ul id="price-filter">
              <FilterItem filter="option1" text={`${PriceConstants.under15 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
              <FilterItem filter="option2" text={`${PriceConstants.under30 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
              <FilterItem filter="option3" text={`${PriceConstants.under50 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
              <FilterItem filter="option4" text={`${PriceConstants.under100 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
              <FilterItem filter="option5" text={`${PriceConstants.under250 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
              <FilterItem filter="option6" text={`${PriceConstants.under1000 / PriceConstants.divisor}`} handleToggle={this.handleToggle} type="radio" />
            </ul> :
            <div />
        }
      </div>
    );
  }
}

PriceFilter.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
};

export default PriceFilter;
