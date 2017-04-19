import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './filter/category-filter';
import PriceFilter from './filter/price-filter';
import SortInput from './sort/sort-input';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFilter: true, // default filter selection
    };

    // bind functions
    this.setCategoryFilter = ::this.setCategoryFilter;
    this.setPriceFilter = ::this.setPriceFilter;
    this.setSort = ::this.setSort;
    this.handleFilterSelect = ::this.handleFilterSelect;
  }

  // handler to determine the filter selected for categories
  setCategoryFilter(categories) {
    this.props.setCategoryFilters(categories);
  }

  // handler to determine the filter selected for prices
  setPriceFilter(price) {
    this.props.setPriceFilters(price);
  }

  // handler to determine sort sequence selected. default is the raw sequence of the data.
  setSort(sort) {
    this.props.setSort(sort);
  }

  handleFilterSelect() {
    this.setState({
      isFilter: !this.state.isFilter, // toggle filters
    });
  }

  render() {
    return (
      <div id="navigation-body">
        <SortInput setSort={this.setSort} />
        <CategoryFilter
          isDisplayed={this.state.isFilter}
          setFilter={this.setCategoryFilter}
          handleFilterSelect={this.handleFilterSelect}
        />
        <PriceFilter
          isDisplayed={!this.state.isFilter}
          setFilter={this.setPriceFilter}
          handleFilterSelect={this.handleFilterSelect}
        />
      </div>
    );
  }
}

Navbar.propTypes = {
  setCategoryFilters: PropTypes.func.isRequired,
  setPriceFilters: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Navbar;
