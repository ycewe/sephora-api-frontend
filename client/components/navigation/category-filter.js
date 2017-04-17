import React from 'react';
import PropTypes from 'prop-types';

import FilterConstants from '../constants/filterConstants';
import FilterItem from './filter-item';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
    };

    this.handleToggle = ::this.handleToggle;
  }

  handleToggle(e) {
    let categories = this.state.filters;

    // if checkbox is checked, add filter to array
    if (e.target.checked) {
      categories.push(e.target.value);

      // cache the filters for manipulation
      this.setState({ filters: categories });
    } else {
      categories = categories.filter(category => category !== e.target.value);

      // cache the filters for manipulation
      this.setState({ filters: categories });
    }

    // callback to pass state to parent
    this.props.setFilter(categories);
  }

  render() {
    return (
      <div>
        <div className="list-title">Category</div>
        <ul id="category-filter">
          <FilterItem filter="cat-tools" text={FilterConstants.tools} handleToggle={this.handleToggle} />
          <FilterItem filter="cat-brushes" text={FilterConstants.brushes} handleToggle={this.handleToggle} />
          <FilterItem filter="cat-markup" text={FilterConstants.markup} handleToggle={this.handleToggle} />
        </ul>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
