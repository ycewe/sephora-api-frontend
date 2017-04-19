import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './filter/category-filter';
import PriceFilter from './filter/price-filter';
import SortInput from './sort/sort-input';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    // bind functions
    this.setCategoryFilter = ::this.setCategoryFilter;
    this.setPriceFilter = ::this.setPriceFilter;
    this.setSort = ::this.setSort;
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

  render() {
    return (
      <div id="navigation-body">
        <SortInput setSort={this.setSort} />
        <CategoryFilter setFilter={this.setCategoryFilter} />
        <PriceFilter setFilter={this.setPriceFilter} />
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
