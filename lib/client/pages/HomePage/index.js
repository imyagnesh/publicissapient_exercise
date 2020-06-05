"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHelmet = require("react-helmet");

var _reactRedux = require("react-redux");

var _recharts = require("recharts");

var _actionTypes = require("../../../constants/actionTypes");

var _utils = require("../../../utils");

var _ResponsiveTable = _interopRequireDefault(require("../../components/ResponsiveTable"));

var _NewsDetails = _interopRequireDefault(require("../../components/NewsDetails"));

var _Divider = _interopRequireDefault(require("../../components/Divider"));

var _arrow_drop_up = _interopRequireDefault(require("../../assets/icons/arrow_drop_up.svg"));

/* eslint-disable react/jsx-no-undef */
const cols = {
  comments: {
    title: 'Comments',
    style: {
      width: '5%'
    }
  },
  voteCount: {
    title: 'Vote Count',
    style: {
      width: '5%'
    }
  },
  upVote: {
    title: 'UpVote',
    style: {
      width: '5%'
    }
  },
  newsDetails: {
    title: 'News Details',
    style: {
      width: '85%',
      textAlign: 'left'
    },
    rowStyle: {
      textAlign: 'left'
    }
  }
};

const HomePage = ({
  news,
  loading,
  loadNews,
  error,
  upVote,
  hideHit,
  match: {
    params: {
      page
    }
  },
  history: {
    push
  }
}) => {
  const [newsList, setNewsList] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    window.scrollTo(0, 0);
    loadNews(page || 1);
  }, [loadNews, page]);
  (0, _react.useEffect)(() => {
    var _news$hits;

    const data = (news === null || news === void 0 ? void 0 : (_news$hits = news.hits) === null || _news$hits === void 0 ? void 0 : _news$hits.reduce((p, c) => {
      if (!c.hide) {
        return [...p, {
          comments: c.num_comments || 0,
          voteCount: c.points || 0,
          upVote: /*#__PURE__*/_react.default.createElement("div", {
            className: "btn",
            "aria-label": `upVote for ${c.objectID}`,
            role: "button",
            tabIndex: 0,
            onKeyDown: () => upVote(c.objectID),
            onClick: () => upVote(c.objectID)
          }, /*#__PURE__*/_react.default.createElement(_arrow_drop_up.default, {
            width: 32,
            height: 32,
            fill: "#979797"
          })),
          newsDetails: /*#__PURE__*/_react.default.createElement(_NewsDetails.default, {
            hit: c,
            onHide: hideHit
          }),
          objectID: c.objectID
        }];
      }

      return p;
    }, [])) || [];
    setNewsList(data);
  }, [news, hideHit, upVote]);

  const previous = () => {
    if (page && page !== 1) {
      push(`/${Number(page) - 1}`);
    }
  };

  const next = () => {
    push(`/${Number(page || 1) + 1}`);
  };

  const head = () => {
    return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, {
      key: Math.random()
    }, /*#__PURE__*/_react.default.createElement("title", null, "Search Heacker News"), /*#__PURE__*/_react.default.createElement("meta", {
      property: "og:title",
      content: "Search Heacker News"
    }), /*#__PURE__*/_react.default.createElement("meta", {
      name: "description",
      content: "Hacker News Search, millions articles and comments at your fingertips."
    }), /*#__PURE__*/_react.default.createElement("meta", {
      name: "robots",
      content: "Hacker, News"
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: "https://hn.algolia.com/"
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, head(), loading ? /*#__PURE__*/_react.default.createElement("h2", null, "Loading....") : error ? /*#__PURE__*/_react.default.createElement("h2", null, error) : news.hits && news.hits.length <= 0 ? /*#__PURE__*/_react.default.createElement("h2", null, "No Records Available") : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: '#F5F5EF'
    }
  }, /*#__PURE__*/_react.default.createElement(_ResponsiveTable.default, {
    columns: cols,
    rows: newsList
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      color: '#bf4808',
      fontWeight: 'bold',
      fontSize: '1rem',
      padding: 10
    }
  }, page && page !== 1 ? /*#__PURE__*/_react.default.createElement("span", {
    className: "btn",
    "aria-label": "Previous",
    role: "button",
    tabIndex: 0,
    onKeyDown: previous,
    onClick: previous
  }, "Previous") : null, page && page > 1 && page < news.nbPages - 1 ? /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '0 5px'
    }
  }, "|") : null, !page || page < news.nbPages - 1 ? /*#__PURE__*/_react.default.createElement("span", {
    className: "btn",
    "aria-label": "Next",
    role: "button",
    tabIndex: 0,
    onKeyDown: next,
    onClick: next
  }, "Next") : null), /*#__PURE__*/_react.default.createElement(_Divider.default, null), newsList.length > 0 ? [/*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: 10
    },
    key: "0"
  }, /*#__PURE__*/_react.default.createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: 300
  }, /*#__PURE__*/_react.default.createElement(_recharts.LineChart, {
    data: newsList,
    margin: {
      top: 10,
      right: 10,
      left: 20,
      bottom: 100
    }
  }, /*#__PURE__*/_react.default.createElement(_recharts.CartesianGrid, {
    vertical: false
  }), /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "objectID",
    angle: -90,
    textAnchor: "end",
    verticalAnchor: "middle"
  }, /*#__PURE__*/_react.default.createElement(_recharts.Label, {
    value: "ID",
    position: "bottom",
    offset: 50
  })), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, {
    label: {
      value: 'Votes',
      angle: -90,
      position: 'left'
    }
  }), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.Line, {
    dataKey: "voteCount",
    stroke: "#366396",
    strokeWidth: 4,
    dot: {
      strokeWidth: 6,
      r: 3
    }
  })))), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    key: "1"
  })] : null));
};

HomePage.propTypes = {
  news: _propTypes.default.shape({
    hits: _propTypes.default.array,
    page: _propTypes.default.number,
    nbPages: _propTypes.default.number
  }).isRequired,
  loadNews: _propTypes.default.func.isRequired,
  loading: _propTypes.default.bool.isRequired,
  error: _propTypes.default.string,
  match: _propTypes.default.shape({
    params: _propTypes.default.object
  }).isRequired,
  history: _propTypes.default.shape({
    push: _propTypes.default.func.isRequired
  }).isRequired,
  upVote: _propTypes.default.func.isRequired,
  hideHit: _propTypes.default.func.isRequired
};
HomePage.defaultProps = {
  error: ''
};

const mapStateToProps = state => {
  return {
    news: state.news,
    loading: !!state.loading[_actionTypes.FETCH_NEWS],
    error: state.erros[_actionTypes.FETCH_NEWS]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNews: payload => dispatch((0, _utils.action)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.REQUEST}`, payload)),
    upVote: payload => dispatch((0, _utils.action)(`${_actionTypes.UP_VOTE}_${_actionTypes.REQUEST}`, payload)),
    hideHit: payload => dispatch((0, _utils.action)(`${_actionTypes.HIDE_HIT}_${_actionTypes.REQUEST}`, payload))
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage);

exports.default = _default;