import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { action } from '../utils';
import { FETCH_NEWS, SUCCESS, FAIL, REQUEST } from '../constants/actionTypes';

function* fetchNews({ payload: page }) {
  try {
    const gstRes = yield call(
      axios.get,
      `https://hn.algolia.com/api/v1/search?query=""&hitsPerPage=30&page=${page}`,
    );
    yield put(action(`${FETCH_NEWS}_${SUCCESS}`, gstRes.data));
  } catch (error) {
    yield put(action(`${FETCH_NEWS}_${FAIL}`, error));
  }
}

function* fetchNewsRequest() {
  yield takeLatest(`${FETCH_NEWS}_${REQUEST}`, fetchNews);
}

export default function* init() {
  yield all([fork(fetchNewsRequest)]);
}
