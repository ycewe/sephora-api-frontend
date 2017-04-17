import React from 'react';
import ImageListContainer from './imageList/image-list-container';
import Navbar from './navigation/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      sort: [],
      paginate: [],
    };

    this.setFilters = ::this.setFilters;
    this.setSort = ::this.setSort;
  }

  setFilters(filters) {
    this.setState({ filters });
  }

  setSort(sort) {
    this.setState({ sort });
  }

  render() {
    return (
      <div id="app-body">
        <Navbar setFilters={this.setFilters} setSort={this.setSort} />
        <ImageListContainer filters={this.state.filters} sort={this.state.sort} />
      </div>
    );
  }
}

export default App;
