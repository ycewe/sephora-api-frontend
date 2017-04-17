import React from 'react';
import ImageListContainer from './imageList/image-list-container';
import Navbar from './navigation/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryFilters: [],
      priceFilters: '0',
      sort: '',
      paginations: [],
    };

    this.setCategoryFilters = ::this.setCategoryFilters;
    this.setPriceFilters = ::this.setPriceFilters;
    this.setSort = ::this.setSort;
    this.setPaginations = ::this.setPaginations;
  }

  setCategoryFilters(categoryFilters) {
    this.setState({
      categoryFilters,
      priceFilters: 0,
    });
  }

  setPriceFilters(priceFilters) {
    this.setState({
      priceFilters,
      categoryFilters: [],
    });
  }

  setSort(sort) {
    this.setState({ sort });
  }

  setPaginations(paginations) {
    this.setState({ paginations });
  }

  render() {
    return (
      <div id="app-body">
        <Navbar
          setCategoryFilters={this.setCategoryFilters}
          setPriceFilters={this.setPriceFilters}
          setSort={this.setSort}
          setPaginations={this.setPaginations}
        />
        <ImageListContainer
          categoryFilters={this.state.categoryFilters}
          priceFilters={this.state.priceFilters}
          sort={this.state.sort}
          paginations={this.state.paginations}
        />
      </div>
    );
  }
}

export default App;
