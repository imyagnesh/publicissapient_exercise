import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/createStore';
import sagas from '../redux/Sagas';

const reducerInitialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(reducerInitialState);

store.runSaga(sagas);

function render(ui, { ...renderOptions } = {}) {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
