import React from 'react';
import CategoryFilter from './category-filter';
import PriceFilter from './price-filter';
import Paginate from './paginate';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navigation-body">
        <Paginate />
        <hr className="list-border" />
        <CategoryFilter />
        <hr className="list-border" />
        <PriceFilter />
      </div>
    );
  }
}

export default Navbar;
