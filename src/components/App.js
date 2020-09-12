import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import HomeView from '../views/HomeView';
// import fetch from './Api/api';
import OneMovie from './OneMovie/OneMovie';
import Searchform from './Searchform/Searchform';

// console.log(fetch.fetchFindMovie(12));
// fetch.fetchFindMovie('bad');
// fetch.fetchFindMovieById(12);
// fetch.fetchFindMovieCredits(12);
// fetch.fetchFindMovieReviews(12);

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movies" component={Searchform} />
          <Route path="/movies/:movieId" component={OneMovie} />
          <Route path="/notfound" />
        </Switch>
      </>
    );
  }
}

export default App;
