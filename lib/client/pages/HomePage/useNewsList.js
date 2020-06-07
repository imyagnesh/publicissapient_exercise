"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NewsDetails = _interopRequireDefault(require("../../components/NewsDetails/NewsDetails"));

var _arrow_drop_up = _interopRequireDefault(require("../../assets/icons/arrow_drop_up.svg"));

const useNewsList = ({
  news,
  hideHit,
  upVote
}) => {
  const [newsList, setNewsList] = (0, _react.useState)([]);
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
            "data-testid": `upvote-${c.objectID}`,
            onKeyDown: () => upVote(c.objectID),
            onClick: () => upVote(c.objectID)
          }, /*#__PURE__*/_react.default.createElement(_arrow_drop_up.default, {
            width: 32,
            height: 32,
            fill: "#979797"
          })),
          newsDetails: /*#__PURE__*/_react.default.createElement(_NewsDetails.default, {
            hit: c,
            onHide: hideHit,
            "data-testid": `newsDetails-${c.objectID}`
          }),
          objectID: c.objectID
        }];
      }

      return p;
    }, [])) || [];
    setNewsList(data);
  }, [news, hideHit, upVote]);
  return {
    newsList
  };
};

var _default = useNewsList;
exports.default = _default;