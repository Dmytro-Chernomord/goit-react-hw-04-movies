import React, { Component } from 'react';
import fetch from '../components/Api/api';
import SearchView from '../components/Searchform/SearchView';
import queryString from 'query-string';
import qs from '../utils/queryParse';

export class Searchform extends Component {
  state = {
    input: '',
    movies: [],
  };
  async componentDidMount() {
    const parseQuery = queryString.parse(this.props.location.search);
    // console.log(qs(this.props.location.search));
    if (parseQuery.query) {
      const movie = await fetch.fetchFindMovie(parseQuery.query);

      this.setState({ movies: movie.results });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    const parseQuery = queryString.parse(this.props.location.search);
    const parseQueryPrev = queryString.parse(prevProps.location.search);
    if (parseQueryPrev.query !== parseQuery.query) {
      const movie = await fetch.fetchFindMovie(parseQuery.query);
      this.setState({ movies: movie.results });
    }
  }
  handleInputChange = e => {
    this.setState({ input: e.currentTarget.value });
  };
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
