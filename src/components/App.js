import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import routes from '../routes';
import { NotFoundView } from '../views/NotFoundView';

const HomeView = lazy(() =>
  import('../views/HomeView' /* webpackChunkName: "home-view" */),
);
const SearchView = lazy(() =>
  import('../views/SearchView' /* webpackChunkName: "movies-view" */),
);
const OneMovie = lazy(() =>
  import('../views/OneMovieView' /* webpackChunkName: "detailsMovie-view" */),
);

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route exact path={routes.movies} component={SearchView} />
            <Route path={routes.movieDetails} component={OneMovie} />
            <Route path={routes.notfound} component={NotFoundView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
