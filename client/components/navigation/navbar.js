import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './filter/category-filter';
import PriceFilter from './filter/price-filter';
import PaginateContainer from './paginate/paginate-container';
import SortInput from './sort/sort-input';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    // bind functions
    this.setCategoryFilter = ::this.setCategoryFilter;
    this.setPriceFilter = ::this.setPriceFilter;
    this.setPagination = ::this.setPagination;
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

  // handler to determine the selected pagination
  setPagination(pageOffset, pageSize) {
    const pagination = [pageOffset, pageSize];
    this.props.setPaginations(pagination);
  }

  setSort(sort) {
    this.props.setSort(sort);
  }

  render() {
    return (
      <div id="navigation-body">
        <PaginateContainer setPagination={this.setPagination} />
        <SortInput setSort={this.setSort} />
        <hr className="list-border" />
        <CategoryFilter setFilter={this.setCategoryFilter} />
        <hr className="list-border" />
        <PriceFilter setFilter={this.setPriceFilter} />
      </div>
    );
  }
}

Navbar.propTypes = {
  setCategoryFilters: PropTypes.func.isRequired,
  setPriceFilters: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
  setPaginations: PropTypes.func.isRequired,
};

export default Navbar;
