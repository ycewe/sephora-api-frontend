import React from 'react';
import ImageListContainer from './imageList/image-list-container';
import Navbar from './navigation/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      sort: '',
      paginations: [],
    };

    this.setFilters = ::this.setFilters;
    this.setSort = ::this.setSort;
    this.setPaginations = ::this.setPaginations;
  }

  setFilters(filters) {
    this.setState({ filters });
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
          setFilters={this.setFilters}
          setSort={this.setSort}
          setPaginations={this.setPaginations}
        />
        <ImageListContainer
          filters={this.state.filters}
          sort={this.state.sort}
          paginations={this.state.paginations}
        />
      </div>
    );
  }
}

export default App;
