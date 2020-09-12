import React, { Component } from 'react';

import fetch from '../Api/api';

export class Details extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    // console.log(Number(this.props.match.params.movieId));
    const cast = await fetch.fetchFindMovieCredits(
      Number(this.props.match.params.movieId),
    );
    this.setState({ cast: cast.cast });
    // console.log(cast.cast);
  }

  render() {
    return (
      <ul>
        {this.state.cast.length > 0 &&
          this.state.cast.map(el => {
            if (el.profile_path) {
              console.log(el.profile_path);
              return (
                <li key={el.cast_id}>
                  {el.name}{' '}
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`}
                    alt={el.name}
                  />
                </li>
              );
            }
            return null;
          })}
      </ul>
    );
  }
}

export default Details;
