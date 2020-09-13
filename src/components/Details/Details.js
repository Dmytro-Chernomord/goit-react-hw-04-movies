import React, { Component } from 'react';

import fetch from '../Api/api';
import s from './Details.module.css';

export class Details extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const cast = await fetch.fetchFindMovieCredits(
      Number(this.props.match.params.movieId),
    );
    this.setState({ cast: cast.cast });
  }

  render() {
    return (
      <ul className={s.ul}>
        {this.state.cast.length > 0 &&
          this.state.cast.map(el => {
            if (el.profile_path) {
              return (
                <li className={s.li} key={el.cast_id}>
                  <p className={s.p}> {el.name}</p>
                  <img
                    className={s.img}
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
