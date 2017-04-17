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
  }

  setFilters(filters) {
    this.setState({ filters });
  }

  render() {
    return (
      <div id="app-body">
        <Navbar setFilters={this.setFilters} />
        <ImageListContainer filters={this.state.filters} />
      </div>
    );
  }
}

export default App;
