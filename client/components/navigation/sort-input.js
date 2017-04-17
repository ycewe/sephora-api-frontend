import React from 'react';
import PropTypes from 'prop-types';
import SortConstants from '../constants/sortConstants';

class SortInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = ::this.handleSelect;
  }

  handleSelect(e) {
    this.props.setSort(e.target.value);
  }

  render() {
    return (
      <select onChange={this.handleSelect}>
        <option value={SortConstants.none}>None</option>
        <option value={SortConstants.increasing}>Increasing</option>
        <option value={SortConstants.decreasing}>Decreasing</option>
      </select>
    );
  }
}

SortInput.propTypes = {
  setSort: PropTypes.func.isRequired,
};

export default SortInput;
