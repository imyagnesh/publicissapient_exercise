import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [sagaMiddleware];

export default (preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(...reduxMiddlewares)),
  );

  store.runSaga = sagaMiddleware.run;

  store.close = () => store.dispatch(END);

  return store;
};
