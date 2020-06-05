import { combineReducers } from 'redux';
import erros from './errorReducer';
import loading from './loadingReducer';
import news from './fetchNews';

export default combineReducers({
  loading,
  erros,
  news,
});
