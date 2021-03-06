import Axios from 'axios';
const API_KEY = '89b9004c084fb7d0e8ffaadd17cb8254';

const fetchPopularMovies = () =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(res => res.data.results);

const fetchFindMovie = sq =>
  Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${sq}&language=en-US&page=1&include_adult=false`,
  ).then(res => res.data);

const fetchFindMovieById = id =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  ).then(res => res.data);

const fetchFindMovieCredits = id =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
  ).then(res => res.data);

const fetchFindMovieReviews = id =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(res => res.data);
export default {
  fetchPopularMovies,
  fetchFindMovie,
  fetchFindMovieById,
  fetchFindMovieCredits,
  fetchFindMovieReviews,
};
