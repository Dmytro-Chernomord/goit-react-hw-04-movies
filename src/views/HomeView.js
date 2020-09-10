import React, { Component } from 'react';
import fetch from '../components/Api/api';
import { Link } from 'react-router-dom';

export class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const data = await fetch.fetchPopularMovies();
    this.setState({ movies: data });
    console.log(data);
  }
  //   async componentDidUpdate(prevState, prevProps) {
  //     const data = await fetch.fetchPopularMovies();
  //     if (prevProps !== this.state) {
  //       this.setState({ movies: data });
  //     }

  //     // console.log(data);
  //   }
  //   componentDidUpdate() {
  //     const data = this.state.movies.map(el => console.log(el));
  //     console.log(data);
  //   }

  render() {
    return (
      <ul>
        {this.state.movies.length > 0 &&
          this.state.movies.map(el => (
            <li key={el.id}>
              <Link to="/movie">{el.name || el.title}</Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default HomeView;
