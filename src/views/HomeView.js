import React, { Component } from 'react';
import fetch from '../components/Api/api';
import { Link } from 'react-router-dom';
import SearchView from './SearchView';

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
        {/* {this.state.movies.length > 0 &&
          this.state.movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.name || el.title}</Link>
            </li>
          ))} */}
      </>
    );
  }
}

export default HomeView;
