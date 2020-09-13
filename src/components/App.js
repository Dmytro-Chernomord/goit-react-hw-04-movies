import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
// import HomeView from '../views/HomeView';
// import OneMovie from './OneMovie/OneMovie';
// import Searchform from './Searchform/Searchform';
import routes from '../routes';
import { NotFoundView } from '../views/NotFoundView';

const HomeView = lazy(() =>
  import('../views/HomeView' /* webpackChunkName: "home-view" */),
);
const Searchform = lazy(() =>
  import('../views/Searchform' /* webpackChunkName: "movies-view" */),
);
const OneMovie = lazy(() =>
  import('./OneMovie/OneMovie' /* webpackChunkName: "detailsMovie-view" */),
);

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route exact path={routes.movies} component={Searchform} />
            <Route path={routes.movieDetails} component={OneMovie} />
            <Route path={routes.notfound} component={NotFoundView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
