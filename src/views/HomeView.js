import React, { Component } from 'react';
import fetch from '../components/Api/api';
import SearchForm from '../components/SearchForm/SearchForm';

export class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const data = await fetch.fetchPopularMovies();
    this.setState({ movies: data });
  }

  render() {
    return (
      <>
        <SearchForm
          movie={this.state.movies}
          location={this.props.location.pathname}
        />
      </>
    );
  }
}

export default HomeView;
