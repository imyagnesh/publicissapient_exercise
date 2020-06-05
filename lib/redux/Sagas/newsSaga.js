"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _effects = require("redux-saga/effects");

var _axios = _interopRequireDefault(require("axios"));

var _utils = require("../../utils");

var _actionTypes = require("../../constants/actionTypes");

const getNews = state => state.news;

const persistData = ({
  key,
  value,
  objectID
}) => {
  const storedData = (0, _utils.getItem)(key);
  const i = storedData === null || storedData === void 0 ? void 0 : storedData.findIndex(x => x.objectID === objectID);

  if (i !== undefined && i !== -1) {
    const updatedStoredUpvotes = [...storedData.slice(0, i), value, ...storedData.slice(i + 1)];
    (0, _utils.setItem)(key, updatedStoredUpvotes);
  } else {
    (0, _utils.setItem)(key, [...(storedData || []), value]);
  }
};

function* fetchNews({
  payload: page
}) {
  try {
    const gstRes = yield (0, _effects.call)(_axios.default.get, `https://hn.algolia.com/api/v1/search?query=""&hitsPerPage=30&page=${page}`);
    const storedUpvotes = (0, _utils.getItem)('upvotes');
    const hiddenHits = (0, _utils.getItem)('hiddenHits');
    const updatedHits = gstRes.data.hits.reduce((p, c) => {
      const upvote = storedUpvotes === null || storedUpvotes === void 0 ? void 0 : storedUpvotes.find(x => x.objectID === c.objectID);
      const hiddenHit = hiddenHits === null || hiddenHits === void 0 ? void 0 : hiddenHits.find(x => x.objectID === c.objectID);

      if (upvote || hiddenHit) {
        return [...p, { ...c,
          ...upvote,
          ...hiddenHit
        }];
      }

      return [...p, c];
    }, []);
    yield (0, _effects.put)((0, _utils.action)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.SUCCESS}`, { ...gstRes.data,
      hits: updatedHits
    }));
  } catch (error) {
    yield (0, _effects.put)((0, _utils.action)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.FAIL}`, error));
  }
}

function* upVote({
  payload: objectID
}) {
  try {
    const news = yield (0, _effects.select)(getNews);
    const index = news.hits.findIndex(x => x.objectID === objectID);
    const value = { ...news.hits[index],
      points: news.hits[index].points + 1
    };
    const updatedHits = [...news.hits.slice(0, index), value, ...news.hits.slice(index + 1)];
    yield (0, _effects.call)(persistData, {
      key: 'upvotes',
      value: {
        objectID: news.hits[index].objectID,
        points: news.hits[index].points + 1
      },
      objectID
    });
    yield (0, _effects.put)((0, _utils.action)(`${_actionTypes.UP_VOTE}_${_actionTypes.SUCCESS}`, { ...news,
      hits: updatedHits
    }));
  } catch (error) {
    yield (0, _effects.put)((0, _utils.action)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.FAIL}`, error));
  }
}

function* hideHit({
  payload: objectID
}) {
  try {
    const news = yield (0, _effects.select)(getNews);
    const index = news.hits.findIndex(x => x.objectID === objectID);
    const value = { ...news.hits[index],
      hide: true
    };
    const updatedHits = [...news.hits.slice(0, index), value, ...news.hits.slice(index + 1)];
    yield (0, _effects.call)(persistData, {
      key: 'hiddenHits',
      value: {
        objectID: news.hits[index].objectID,
        hide: true
      },
      objectID
    });
    yield (0, _effects.put)((0, _utils.action)(`${_actionTypes.HIDE_HIT}_${_actionTypes.SUCCESS}`, { ...news,
      hits: updatedHits
    }));
  } catch (error) {
    yield (0, _effects.put)((0, _utils.action)(`${_actionTypes.HIDE_HIT}_${_actionTypes.FAIL}`, error));
  }
}

function* fetchNewsRequest() {
  yield (0, _effects.takeLatest)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.REQUEST}`, fetchNews);
}

function* upVoteRequest() {
  yield (0, _effects.takeLatest)(`${_actionTypes.UP_VOTE}_${_actionTypes.REQUEST}`, upVote);
}

function* hideHitRequest() {
  yield (0, _effects.takeLatest)(`${_actionTypes.HIDE_HIT}_${_actionTypes.REQUEST}`, hideHit);
}

function* init() {
  yield (0, _effects.all)([(0, _effects.fork)(fetchNewsRequest), (0, _effects.fork)(upVoteRequest), (0, _effects.fork)(hideHitRequest)]);
}