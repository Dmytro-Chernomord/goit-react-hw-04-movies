import React, { Component } from 'react';
import fetch from '../Api/api';
import s from './Review.module.css';

export class Reviews extends Component {
  // static propTypes = {
  // };
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const reviews = await fetch.fetchFindMovieReviews(
      Number(this.props.match.params.movieId),
    );
    this.setState({ reviews: reviews.results });
  }

  render() {
    return (
      <ul>
        {this.state.reviews.length > 0 ? (
          this.state.reviews.map(el => {
            return (
              <li key={el.id}>
                <h2> {el.author}</h2>{' '}
                <span className={s.span}>{el.content}</span>
              </li>
            );
          })
        ) : (
          <p>No Reviews</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
