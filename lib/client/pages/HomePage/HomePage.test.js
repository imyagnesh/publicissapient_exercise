"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _reactHelmet = require("react-helmet");

var _axios = _interopRequireDefault(require("axios"));

var _testUtils = require("../../../utils/test-utils");

var _index = _interopRequireDefault(require("./index"));

jest.mock('axios');
const data = {
  hits: [{
    created_at: '2020-02-12T17:38:20.000Z',
    title: 'Gears',
    url: 'https://ciechanow.ski/gears/',
    author: 'robert-boehnke',
    points: 2760,
    story_text: null,
    comment_text: null,
    num_comments: 222,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1581529100,
    _tags: ['story', 'author_robert-boehnke', 'story_22310813'],
    objectID: '22310813',
    _highlightResult: {
      title: {
        value: 'Gears',
        matchLevel: 'none',
        matchedWords: []
      },
      url: {
        value: 'https://ciechanow.ski/gears/',
        matchLevel: 'none',
        matchedWords: []
      },
      author: {
        value: 'robert-boehnke',
        matchLevel: 'none',
        matchedWords: []
      }
    }
  }, {
    created_at: '2013-04-12T05:07:53.000Z',
    title: '',
    url: '',
    author: 'xijuan',
    points: 2751,
    story_text: '26 to 30',
    comment_text: null,
    num_comments: null,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: 5536734,
    created_at_i: 1365743273,
    relevancy_score: 4557,
    _tags: ['pollopt', 'author_xijuan', 'story_5536739'],
    objectID: '5536739',
    _highlightResult: {
      title: {
        value: '',
        matchLevel: 'none',
        matchedWords: []
      },
      url: {
        value: '',
        matchLevel: 'none',
        matchedWords: []
      },
      author: {
        value: 'xijuan',
        matchLevel: 'none',
        matchedWords: []
      },
      story_text: {
        value: '26 to 30',
        matchLevel: 'none',
        matchedWords: []
      }
    }
  }],
  nbHits: 21726300,
  page: 1,
  nbPages: 34,
  hitsPerPage: 30,
  exhaustiveNbHits: true,
  query: '""',
  params: 'advancedSyntax=true&analytics=true&analyticsTags=backend&hitsPerPage=30&page=1&query=%22%22',
  processingTimeMS: 2
};
const pushFn = jest.fn();
const props = {
  match: {
    params: {
      page: null
    }
  },
  history: {
    push: pushFn
  }
};
describe('test HomePage', () => {
  const storageSpy = jest.spyOn(Storage.prototype, 'setItem');
  afterEach(() => {
    jest.clearAllMocks();
    storageSpy.mockClear();
  });
  test('should load correct helmet information', () => {
    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));

    const helmet = _reactHelmet.Helmet.peek();

    expect(helmet.title).toStrictEqual('Search Heacker News');
  });
  test('should render loading component on api call', async () => {
    _axios.default.get.mockResolvedValueOnce({
      data: {
        hits: []
      }
    });

    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    await (0, _react2.waitFor)(() => expect(_testUtils.screen.getByTestId('h2loading')).toHaveTextContent('Loading....'));
  });
  test('should render no records component when no records found', async () => {
    _axios.default.get.mockResolvedValueOnce({
      data: {
        hits: []
      }
    });

    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    await (0, _react2.waitFor)(() => expect(_testUtils.screen.getByTestId('norecords')).toHaveTextContent('No Records Available'));
  });
  test('should call api and render data', async () => {
    _axios.default.get.mockResolvedValueOnce({
      data
    });

    const {
      asFragment
    } = (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    await (0, _react2.waitFor)(() => expect(_axios.default.get).toHaveBeenCalledTimes(1));
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render error component on api fail', async () => {
    _axios.default.get.mockRejectedValueOnce(new Error('API Fail...'));

    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    await (0, _react2.waitFor)(() => expect(_testUtils.screen.getByTestId('h2error')).toHaveTextContent('API Fail...'));
  });
  test('should not render previous button when first page loaded', async () => {
    _axios.default.get.mockResolvedValueOnce({
      data
    });

    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    await _testUtils.screen.findByTestId('container');
    expect(_testUtils.screen.queryByTestId('previousbtn')).toBeNull();
  });
  test('should redirect to next page on click of next button', async () => {
    _axios.default.get.mockResolvedValueOnce({
      data
    });

    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    await _testUtils.screen.findByTestId('container');

    const nextBtn = _testUtils.screen.queryByTestId('nextbtn');

    expect(nextBtn).toBeTruthy();

    _react2.fireEvent.click(nextBtn);

    expect(pushFn).toHaveBeenCalledTimes(1);
    expect(pushFn).toHaveBeenCalledWith(`/2`);
  });
  test('should redirect to next page on click of previous button', async () => {
    _axios.default.get.mockResolvedValueOnce({
      data
    });

    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, (0, _extends2.default)({}, props, {
      match: {
        params: {
          page: 2
        }
      }
    })));
    await _testUtils.screen.findByTestId('container');

    const previousBtn = _testUtils.screen.queryByTestId('previousbtn');

    expect(previousBtn).toBeTruthy();

    _react2.fireEvent.click(previousBtn);

    expect(pushFn).toHaveBeenCalledTimes(1);
    expect(pushFn).toHaveBeenCalledWith(`/`);
  });
  test('should increase upvote count on Upvote click', async () => {
    _axios.default.get.mockResolvedValueOnce({
      data
    });

    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    await _testUtils.screen.findByTestId('container');

    const upvote = _testUtils.screen.getByTestId(`upvote-${data.hits[0].objectID}`);

    let currentPoints = data.hits[0].points;
    expect(_testUtils.screen.getByTestId(`td-voteCount-${data.hits[0].objectID}`)).toHaveTextContent(currentPoints);

    _react2.fireEvent.click(upvote);

    currentPoints += 1;
    await (0, _react2.waitFor)(() => expect(storageSpy).toHaveBeenCalledTimes(1));
    expect(storageSpy).toHaveBeenCalledWith('upvotes', JSON.stringify([{
      objectID: data.hits[0].objectID,
      points: currentPoints
    }]));
    expect(_testUtils.screen.getByTestId(`td-voteCount-${data.hits[0].objectID}`)).toHaveTextContent(currentPoints);

    _react2.fireEvent.keyDown(upvote);

    currentPoints += 1;
    await (0, _react2.waitFor)(() => expect(storageSpy).toHaveBeenCalledTimes(2));
    expect(storageSpy).toHaveBeenCalledWith('upvotes', JSON.stringify([{
      objectID: data.hits[0].objectID,
      points: currentPoints
    }]));
    expect(_testUtils.screen.getByTestId(`td-voteCount-${data.hits[0].objectID}`)).toHaveTextContent(currentPoints);
  });
  test('should hide news on click of hide button', async () => {
    _axios.default.get.mockResolvedValueOnce({
      data
    });

    (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    await _testUtils.screen.findByTestId('container');

    const hideBtn = _testUtils.screen.getByTestId(`hideBtn-${data.hits[0].objectID}`);

    _react2.fireEvent.click(hideBtn);

    await (0, _react2.waitFor)(() => expect(storageSpy).toHaveBeenCalledTimes(1));
    expect(storageSpy).toHaveBeenCalledWith('hiddenHits', JSON.stringify([{
      objectID: data.hits[0].objectID,
      hide: true
    }]));
    expect(_testUtils.screen.queryByTestId(`hideBtn-${data.hits[0].objectID}`)).toBeNull();

    const hideBtn1 = _testUtils.screen.getByTestId(`hideBtn-${data.hits[1].objectID}`);

    _react2.fireEvent.keyDown(hideBtn1);

    await (0, _react2.waitFor)(() => expect(storageSpy).toHaveBeenCalledTimes(2));
    expect(storageSpy).toHaveBeenCalledWith('hiddenHits', JSON.stringify([{
      objectID: data.hits[0].objectID,
      hide: true
    }, {
      objectID: data.hits[1].objectID,
      hide: true
    }]));
    expect(_testUtils.screen.queryByTestId(`hideBtn-${data.hits[1].objectID}`)).toBeNull();
  });
});