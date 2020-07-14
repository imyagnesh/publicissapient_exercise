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

var _ResponsiveTable = _interopRequireDefault(require("../../components/ResponsiveTable/ResponsiveTable"));

var _Divider = _interopRequireDefault(require("../../components/Divider/Divider"));

var _RechartLine = _interopRequireDefault(require("../../components/RechartLine"));

var _useNewsList = _interopRequireDefault(require("./useNewsList"));

require("./HomePage.css");

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
  const {
    newsList
  } = (0, _useNewsList.default)({
    news,
    upVote,
    hideHit
  });
  (0, _react.useEffect)(() => {
    window.scrollTo(0, 0);
    loadNews(page || 1);
  }, [loadNews, page]);

  const previous = () => {
    if (page && page !== 1) {
      const prevPage = Number(page) - 1;
      push(`/${prevPage === 1 ? '' : prevPage}`);
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, head(), loading ? /*#__PURE__*/_react.default.createElement("h2", {
    "data-testid": "h2loading"
  }, "Loading....") : error ? /*#__PURE__*/_react.default.createElement("h2", {
    "data-testid": "h2error"
  }, error) : news.hits && news.hits.length <= 0 ? /*#__PURE__*/_react.default.createElement("h2", {
    "data-testid": "norecords"
  }, "No Records Available") : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: '#F5F5EF'
    },
    "data-testid": "container"
  }, /*#__PURE__*/_react.default.createElement(_ResponsiveTable.default, {
    columns: cols,
    rows: newsList,
    "data-testid": "responsiveable"
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
    onClick: previous,
    "data-testid": "previousbtn"
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
    onClick: next,
    "data-testid": "nextbtn"
  }, "Next") : null), /*#__PURE__*/_react.default.createElement(_Divider.default, null), newsList.length > 0 ? [/*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: 10
    },
    key: "0"
  }, /*#__PURE__*/_react.default.createElement(_RechartLine.default, {
    newsList: newsList,
    xDataKey: "objectID",
    yDataKey: "voteCount"
  })), /*#__PURE__*/_react.default.createElement(_Divider.default, {
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
var _default = HomePage;
exports.default = _default;