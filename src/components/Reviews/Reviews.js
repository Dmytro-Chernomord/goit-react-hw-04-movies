import React, { Component } from 'react';

import fetch from '../Api/api';

export class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    // console.log(Number(this.props.match.params.movieId));
    const reviews = await fetch.fetchFindMovieReviews(
      Number(this.props.match.params.movieId),
    );
    this.setState({ reviews: reviews.results });
    console.log(reviews.results);
  }

  render() {
    return (
      <ul>
        {this.state.reviews.length > 0 ? (
          this.state.reviews.map(el => {
            return (
              <li key={el.id}>
                {el.author} <span>{el.content}</span>{' '}
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
