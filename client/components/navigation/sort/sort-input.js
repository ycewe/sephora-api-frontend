import React from 'react';
import PropTypes from 'prop-types';
import SortConstants from '../../constants/sortConstants';
import SortOption from './sort-option';

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
      <div>
        <div className="list-title">Sort</div>
        <select onChange={this.handleSelect}>
          <SortOption value={SortConstants.none} text="None" />
          <SortOption value={SortConstants.increasing} text="Lowest price first" />
          <SortOption value={SortConstants.decreasing} text="Highest price first" />
        </select>
      </div>
    );
  }
}

SortInput.propTypes = {
  setSort: PropTypes.func.isRequired,
};

export default SortInput;
