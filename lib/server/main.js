"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _compression = _interopRequireDefault(require("compression"));

var _reactRouterDom = require("react-router-dom");

var _server = require("react-dom/server");

var _server2 = require("@loadable/server");

var _reactRedux = require("react-redux");

var _createStore = _interopRequireDefault(require("../Shared/store/createStore"));

var _Sagas = _interopRequireDefault(require("../Shared/Sagas"));

const app = (0, _express.default)();

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return _compression.default.filter(req, res);
}

app.use((0, _compression.default)({
  level: 2,
  // set compression level from 1 to 9 (6 by default)
  filter: shouldCompress // set predicate to determine whether to compress

}));
const port = process.env.PORT || 3000;
app.use(_express.default.static(_path.default.join(__dirname, '../../public')));

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require, import/no-extraneous-dependencies */
  const {
    default: webpackConfig
  } = require('../../webpack.config.babel');

  const webpackDevMiddleware = require('webpack-dev-middleware');

  const webpack = require('webpack');
  /* eslint-enable global-require, import/no-extraneous-dependencies */


  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    logLevel: 'silent',
    publicPath: '/dist/web',

    writeToDisk(filePath) {
      return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
    }

  }));
}

const nodeStats = _path.default.resolve(__dirname, '../../public/dist/node/loadable-stats.json');

const webStats = _path.default.resolve(__dirname, '../../public/dist/web/loadable-stats.json');

app.get('*', (req, res) => {
  const nodeExtractor = new _server2.ChunkExtractor({
    statsFile: nodeStats
  });
  const {
    default: App
  } = nodeExtractor.requireEntrypoint();
  const webExtractor = new _server2.ChunkExtractor({
    statsFile: webStats
  });
  const jsx = webExtractor.collectChunks( /*#__PURE__*/_react.default.createElement(App, null));
  const store = (0, _createStore.default)();
  const context = {};
  const html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, jsx)));
  const preloadedState = store.getState();
  store.runSaga(_Sagas.default);
  console.log('store.runSaga(sagas)', store.runSaga(_Sagas.default));
  res.set('content-type', 'text/html');
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
        </head>
        <body>
          <div id="main">${html}</div>
          <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
          ${webExtractor.getScriptTags()}
        </body>
      </html>
    `);
  store.close();
}); // eslint-disable-next-line no-console

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});