import React, { Component } from 'react';
import fetch from '../Api/api';
// import defImg from '../default.jpg';
import { Link, Route } from 'react-router-dom';
import Details from '../Details/Details';
import Reviews from '../Reviews/Reviews';

export class OneMovie extends Component {
  state = {
    movie: {},
  };
  async componentDidMount() {
    const movie = await fetch.fetchFindMovieById(
      this.props.match.params.movieId,
    );
    this.setState({ movie });
  }
  handleGoBack = () => {
    const { state } = this.props.location;
    const { history } = this.props;
    if (state) {
      history.push(state.from);
    } else {
      history.push('/');
    }
  };
  render() {
    // console.log(this.state.movie);
    //   const genre = this.state.movie.genres.map((el, i, array) => {
    //     if (i !== array.length - 1) {
    //       console.log('hi');
    //       return el.name + ', ';
    //     }
    //     return el.name + '.';
    //   });
    const {
      original_title,
      vote_average,
      genres,
      release_date,
      overview,
      poster_path,
    } = this.state.movie;
    return (
      <>
        <button onClick={this.handleGoBack} type="button">
          Go back
        </button>
        <img
          width="300"
          height="450"
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt=""
        />
        <h1>{original_title}</h1>
        <p>{vote_average && `User rate: ${vote_average * 10} %`}</p>
        <h2>
          Genre:{' '}
          {genres &&
            genres.map((el, i, array) => {
              if (i !== array.length - 1) {
                return el.name + ', ';
              }
              return el.name + '.';
            })}
        </h2>
        <p>{release_date && `Release Year: ${release_date.slice(0, 4)}`}</p>
        <p>{overview}</p>
        <Link to={`${this.props.match.url}/cast`}>Casts</Link>
        <Link to={`${this.props.match.url}/reviews`}>Review</Link>
        <Route
          path={`${this.props.match.path}/cast`}
          component={Details}
          //   render={props => <Details {...props} movie={this.state.movie} />}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          component={Reviews}
          //   render={props => <Details {...props} movie={this.state.movie} />}
        />
      </>
    );
  }
}

export default OneMovie;
