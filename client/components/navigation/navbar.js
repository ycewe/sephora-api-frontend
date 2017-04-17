import React from 'react';
import CategoryFilter from './category-filter';
import PriceFilter from './price-filter';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navigation-body">
        <CategoryFilter />
        <hr id="list-border" />
        <PriceFilter />
      </div>
    );
  }
}

export default Navbar;
