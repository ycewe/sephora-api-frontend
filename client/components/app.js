import React from 'react';
import ContentContainer from './contentContainer/content-container';
import Navbar from './sideNav/side-nav';

/**
  * Main component that renders the application.
  * Mediator for data and input.
  */
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
  }

  setCategoryFilters(categoryFilters) {
    this.setState({
      categoryFilters,
      priceFilters: '0',
    });
  }

  setPriceFilters(priceFilters) {
    this.setState({
      categoryFilters: [],
      priceFilters,
    });
  }

  setSort(sort) {
    this.setState({ sort });
  }

  render() {
    return (
      <div id="app-body">
        <Navbar
          setCategoryFilters={this.setCategoryFilters}
          setPriceFilters={this.setPriceFilters}
          setSort={this.setSort}
        />
        <ContentContainer
          categoryFilters={this.state.categoryFilters}
          priceFilters={this.state.priceFilters}
          sort={this.state.sort}
        />
      </div>
    );
  }
}

export default App;
