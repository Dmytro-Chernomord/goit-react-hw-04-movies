import React, { Component } from 'react';
import fetch from '../Api/api';
// import defImg from '../default.jpg';
import { Link, Route } from 'react-router-dom';
import Header from '../Header/Header';

export class OneMovie extends Component {
  state = {
    movie: {},
  };
  async componentDidMount() {
    // console.log(this.props.match.params.movieId.slice(7));
    const movie = await fetch.fetchFindMovieById(
      this.props.match.params.movieId,
    );
    this.setState({ movie });
  }

  render() {
    // console.log(this.state.movie);
    //   const genre = this.state.movie.genres.map((el, i, array) => {
    //     if (i !== array.length - 1) {
    //       console.log('hi');
    //       return el.name + ', ';
    //     }
    //     return el.name + '.';
    //   });
    return (
      <>
        <img
          width="300"
          height="450"
          src={`https://image.tmdb.org/t/p/w300/${this.state.movie.poster_path}`}
          alt=""
        />
        <h1>{this.state.movie.original_title}</h1>
        <p>
          {this.state.movie.vote_average &&
            `User rate: ${this.state.movie.vote_average * 10} %`}
        </p>
        <h2>
          Genre:{' '}
          {this.state.movie.genres &&
            this.state.movie.genres.map((el, i, array) => {
              if (i !== array.length - 1) {
                return el.name + ', ';
              }
              return el.name + '.';
            })}
        </h2>
        <p>
          {this.state.movie.release_date &&
            `Release Year: ${this.state.movie.release_date.slice(0, 4)}`}
        </p>
        <p>{this.state.movie.overview}</p>
        <Link to={`${this.props.location.pathname}/cast`}>aaa</Link>
        <Route path={`movies/:cast`} component={Header} />
      </>
    );
  }
}

export default OneMovie;
