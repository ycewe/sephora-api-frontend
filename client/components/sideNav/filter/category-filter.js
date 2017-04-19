import React from 'react';
import PropTypes from 'prop-types';
import CategoryConstants from '../../constants/categoryConstants';
import FilterItem from './filter-item';

/**
  * Handles filtering of category of products
  */
class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
    };

    this.handleToggle = ::this.handleToggle;
    this.handleSelect = ::this.handleSelect;
  }

  handleToggle(e) {
    let categories = this.state.filters.slice();

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

  handleSelect() {
    this.setState({
      filters: [],
    });
    this.props.handleFilterSelect();
  }

  render() {
    return (
      <div id="category-filter-container">
        <input type="radio" name="filter" id="cat-filter" onChange={this.handleSelect} checked={this.props.isDisplayed} />
        <label htmlFor="cat-filter" className="list-title">Category</label>
        {
          (this.props.isDisplayed) ?
            <ul id="category-filter">
              <FilterItem filter="cat-tools" text={CategoryConstants.tools} handleToggle={this.handleToggle} type="checkbox" />
              <FilterItem filter="cat-brushes" text={CategoryConstants.brushes} handleToggle={this.handleToggle} type="checkbox" />
              <FilterItem filter="cat-markup" text={CategoryConstants.markup} handleToggle={this.handleToggle} type="checkbox" />
            </ul> :
            <div />
        }
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
