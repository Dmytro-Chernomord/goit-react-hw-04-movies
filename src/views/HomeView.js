import React, { Component } from 'react';
import fetch from '../components/Api/api';
import SearchView from '../components/Searchform/SearchView';

export class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const data = await fetch.fetchPopularMovies();
    this.setState({ movies: data });
    console.log(data);
    console.log(this.props.location.pathname);
  }

  render() {
    return (
      <>
        <SearchView
          movie={this.state.movies}
          location={this.props.location.pathname}
        />
      </>
    );
  }
}

export default HomeView;
