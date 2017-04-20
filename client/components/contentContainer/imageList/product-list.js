import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './product-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      existingProducts: [],
      isViewAll: true,
    };

    this.displayProduct = ::this.displayProduct;
  }

  componentWillReceiveProps() {
    this.setState({
      existingProducts: this.props.products,
      isViewAll: true,
    });
  }

  displayProduct(e) {
    if (this.state.isViewAll) {
      this.setState({
        existingProducts: this.props.products.filter(
          product => product.id === e.target.value,
        )[0],
        isViewAll: false,
      });
    } else {
      this.setState({
        existingProducts: this.props.products,
        isViewAll: true,
      });
    }
  }

  render() {
    return (
      <div id="product-list-body">
        {
          (this.state.isViewAll) ?
            this.state.existingProducts.map(product =>
              <ProductItem
                key={product.id}
                isViewAll={this.state.isViewAll}
                product={product}
                displayProduct={this.displayProduct}
              />,
            ) :
            <ProductItem
              isViewAll={this.state.isViewAll}
              product={this.state.existingProducts}
              displayProduct={this.displayProduct}
            />
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
