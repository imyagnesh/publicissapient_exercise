/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import ErrorBoundary from './components/ErrorBoundry';
import HomePage from './pages/HomePage';
import './main.css';

// const HomePage = loadable(() => import(/* webpackChunkName: 'HomePage' */ './pages/HomePage'));
const NotFoundPage = loadable(() =>
  import(/* webpackChunkName: 'NotFoundPage' */ './pages/NotFoundPage'),
);

const App = () => {
  return (
    <main>
      <ErrorBoundary>
        <Switch>
          <Route path="/:page?" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ErrorBoundary>
    </main>
  );
};

export default App;
