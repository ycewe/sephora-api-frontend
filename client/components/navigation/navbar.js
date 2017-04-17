import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './category-filter';
import PriceFilter from './price-filter';
import Paginate from './paginate';
import SortInput from './sort-input';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryFilter: [],
      priceFilter: [],
      pagination: [],
      sort: '',
    };

    // bind functions
    this.setCategoryFilter = ::this.setCategoryFilter;
    this.setPriceFilter = ::this.setPriceFilter;
    this.setPagination = ::this.setPagination;
    this.setSort = ::this.setSort;
  }

  // handler to determine the filter selected for categories
  setCategoryFilter(categories) {
    this.setState({
      categoryFilter: categories,
    });
    this.props.setFilters(categories);
  }

  // handler to determine the filter selected for prices
  setPriceFilter(range) {
    this.setState({
      priceFilter: range,
    });
  }

  // handler to determine the selected pagination
  setPagination(pagination) {
    this.setState({
      paginate: pagination,
    });
  }

  setSort(sort) {
    this.setState({
      sort,
    });
    this.props.setSort(sort);
  }

  render() {
    return (
      <div id="navigation-body">
        <Paginate setFilter={this.setPagination} />
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
  setFilters: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Navbar;
