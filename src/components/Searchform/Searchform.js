import React, { Component } from 'react';
import fetch from '../Api/api';
import SearchView from '../../views/SearchView';
import queryString from 'query-string';

export class Searchform extends Component {
  state = {
    input: '',
    movies: [],
  };
  async componentDidMount() {
    const parseQuery = queryString.parse(this.props.location.search);
    console.log(parseQuery.query);
    if (parseQuery.query) {
      const movie = await fetch.fetchFindMovie(parseQuery.query);
      console.log(movie);

      this.setState({ movies: movie.results });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    const parseQuery = queryString.parse(this.props.location.search);
    const parseQueryPrev = queryString.parse(prevProps.location.search);

    console.log('prevSearch', parseQueryPrev);
    console.log(parseQuery);
    if (parseQueryPrev.query !== parseQuery.query) {
      console.log('hi');
      const movie = await fetch.fetchFindMovie(parseQuery.query);
      //   this.setState({ movies: movie, input: '' });
      console.log(movie);
      //       // this.setState({ movies: data.results, input: '' });
      //       data.then(res => {
      //         console.log(res.results);
      this.setState({ movies: movie.results });
    }
  }

  handleInputChange = e => {
    this.setState({ input: e.currentTarget.value });
  };
  //   handleSubmit =
  //     //   async
  //     e => {
  //       e.preventDefault();
  //       const data =
  //         // await
  //         fetch.fetchFindMovie(this.state.input);
  //       // this.setState({ movies: data.results, input: '' });
  //       data.then(res => {
  //         console.log(res.results);
  //         this.setState({ movies: res.results, input: '' });
  //       });
  //     };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.input}`,
    });

    this.setState({ input: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.handleInputChange}
              value={this.state.input}
              type="text"
              placeholder="Film search"
            />
          </label>
        </form>
        {this.state.movies.length > 0 && (
          <SearchView
            movie={this.state.movies}
            location={`${this.props.location.pathname}${this.props.location.search}`}
          />
        )}
      </>
    );
  }
}

export default Searchform;
