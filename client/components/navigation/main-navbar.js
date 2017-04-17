import React from 'react';
import ProductNav from './product-nav';
import PriceFilter from './price-filter';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isProductOpen: true,
      isPriceOpen: false,
    };

    this.toggleProduct = this.toggleProduct.bind(this);
    this.togglePrice = this.togglePrice.bind(this);
  }

  toggleProduct() {
    this.setState({
      isProductOpen: !this.state.isProductOpen,
    });
  }

  togglePrice() {
    this.setState({
      isPriceOpen: !this.state.isPriceOpen,
    });
  }

  render() {
    return (
      <div id="navigation-body">
        <ProductNav />
        <hr id="list-border" />
        <PriceFilter />
      </div>
    );
  }
}

export default Navbar;
