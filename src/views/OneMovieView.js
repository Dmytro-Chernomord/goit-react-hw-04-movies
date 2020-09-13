import React, { Component } from 'react';
import fetch from '../components/Api/api';
// import defImg from '../default.jpg';
import { Link, Route } from 'react-router-dom';
import Details from '../components/Details/Details';
import Reviews from '../components/Reviews/Reviews';
import s from './OneMovieView.module.css';

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
        <button className={s.button} onClick={this.handleGoBack} type="button">
          Go back
        </button>
        <div className={s.flex}>
          <div>
            <img
              className={s.img}
              width="300"
              height="450"
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={`${original_title}`}
            />
          </div>
          <div className={s.info}>
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
          </div>
        </div>
        <ul>
          <li className={s.li}>
            <Link to={`${this.props.match.url}/cast`}>Casts</Link>
          </li>
          <li className={s.li}>
            <Link to={`${this.props.match.url}/reviews`}>Review</Link>
          </li>
        </ul>
        <Route path={`${this.props.match.path}/cast`} component={Details} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default OneMovie;
