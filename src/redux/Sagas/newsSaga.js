import { call, put, takeLatest, all, fork, select } from 'redux-saga/effects';
import axios from 'axios';
import { action, getItem, setItem } from '../../utils';
import { FETCH_NEWS, SUCCESS, FAIL, REQUEST, HIDE_HIT, UP_VOTE } from '../../constants/actionTypes';

const getNews = (state) => state.news;

const persistData = ({ key, value, objectID }) => {
  const storedData = getItem(key);
  const i = storedData?.findIndex((x) => x.objectID === objectID);
  if (i !== undefined && i !== -1) {
    const updatedStoredUpvotes = [...storedData.slice(0, i), value, ...storedData.slice(i + 1)];
    setItem(key, updatedStoredUpvotes);
  } else {
    setItem(key, [...(storedData || []), value]);
  }
};

function* fetchNews({ payload: page }) {
  try {
    const gstRes = yield call(
      axios.get,
      `https://hn.algolia.com/api/v1/search?query=""&hitsPerPage=30&page=${page}`,
    );
    const storedUpvotes = getItem('upvotes');
    const hiddenHits = getItem('hiddenHits');
    const updatedHits = gstRes.data.hits.reduce((p, c) => {
      const upvote = storedUpvotes?.find((x) => x.objectID === c.objectID);
      const hiddenHit = hiddenHits?.find((x) => x.objectID === c.objectID);
      if (upvote || hiddenHit) {
        return [...p, { ...c, ...upvote, ...hiddenHit }];
      }
      return [...p, c];
    }, []);
    yield put(action(`${FETCH_NEWS}_${SUCCESS}`, { ...gstRes.data, hits: updatedHits }));
  } catch (error) {
    yield put(action(`${FETCH_NEWS}_${FAIL}`, error));
  }
}

function* upVote({ payload: objectID }) {
  const news = yield select(getNews);
  const index = news.hits.findIndex((x) => x.objectID === objectID);
  const value = { ...news.hits[index], points: news.hits[index].points + 1 };
  const updatedHits = [...news.hits.slice(0, index), value, ...news.hits.slice(index + 1)];
  yield call(persistData, {
    key: 'upvotes',
    value: {
      objectID: news.hits[index].objectID,
      points: news.hits[index].points + 1,
    },
    objectID,
  });
  yield put(action(`${UP_VOTE}_${SUCCESS}`, { ...news, hits: updatedHits }));
}

function* hideHit({ payload: objectID }) {
  const news = yield select(getNews);
  const index = news.hits.findIndex((x) => x.objectID === objectID);
  const value = { ...news.hits[index], hide: true };
  const updatedHits = [...news.hits.slice(0, index), value, ...news.hits.slice(index + 1)];
  yield call(persistData, {
    key: 'hiddenHits',
    value: {
      objectID: news.hits[index].objectID,
      hide: true,
    },
    objectID,
  });
  yield put(action(`${HIDE_HIT}_${SUCCESS}`, { ...news, hits: updatedHits }));
}

function* fetchNewsRequest() {
  yield takeLatest(`${FETCH_NEWS}_${REQUEST}`, fetchNews);
}

function* upVoteRequest() {
  yield takeLatest(`${UP_VOTE}_${REQUEST}`, upVote);
}

function* hideHitRequest() {
  yield takeLatest(`${HIDE_HIT}_${REQUEST}`, hideHit);
}

export default function* init() {
  yield all([fork(fetchNewsRequest), fork(upVoteRequest), fork(hideHitRequest)]);
}
