"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _spdy = _interopRequireDefault(require("spdy"));

var _fs = _interopRequireDefault(require("fs"));

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _compression = _interopRequireDefault(require("compression"));

var _reactHelmet = require("react-helmet");

var _reactRouterDom = require("react-router-dom");

var _server = require("react-dom/server");

var _server2 = require("@loadable/server");

var _expressRobotsTxt = _interopRequireDefault(require("express-robots-txt"));

var _reactRedux = require("react-redux");

var _createStore = _interopRequireDefault(require("../redux/store/createStore"));

var _Sagas = _interopRequireDefault(require("../redux/Sagas"));

const app = (0, _express.default)();
app.use((0, _expressRobotsTxt.default)({
  UserAgent: '*',
  Disallow: ''
}));

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return _compression.default.filter(req, res);
}

app.use((0, _compression.default)({
  level: 2,
  // set compression level from 1 to 9 (6 by default)
  filter: shouldCompress // set predicate to determine whether to compress

}));
const port = process.env.PORT || 8080;
app.use(_express.default.static(_path.default.join(__dirname, '../../public'), {
  maxAge: '30d'
}));

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

const webStats = _path.default.resolve(__dirname, '../../public/dist/web/loadable-stats.json'); // app.get('/sw.js', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'sw.js'));
// });


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

  const helmet = _reactHelmet.Helmet.renderStatic(); // res.set('content-type', 'text/html');


  res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="canonical" href="https://hn.algolia.com/" />
        
        <link rel="apple-touch-icon" sizes="57x57" href="/dist/node/icons/ios/icon_57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/dist/node/icons/ios/icon_60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/dist/node/icons/ios/icon_72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/dist/node/icons/ios/icon_76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/dist/node/icons/ios/icon_114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/dist/node/icons/ios/icon_120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/dist/node/icons/ios/icon_144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/dist/node/icons/ios/icon_152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/dist/node/icons/ios/icon_180x180.png">
        <link rel="apple-touch-startup-image" href="/dist/node/icons/ios/icon_1024x1014.png">
        <meta name="apple-mobile-web-app-title" content="AppTitle">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <link rel="icon" type="image/png" sizes="192x192"  href="/dist/node/android/icon_192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/dist/node/icons/favicon/icon_32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/dist/node/icons/favicon/icon_96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/dist/node/icons/favicon/icon_16x16.png">
        <link rel="manifest" href="/dist/node/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
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
            <script>
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/dist/web/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            </script>
          ${webExtractor.getScriptTags()}
        </body>
      </html>
    `);
  store.close();
});
const options = {
  key: _fs.default.readFileSync(_path.default.resolve(__dirname, '../../server.key')),
  cert: _fs.default.readFileSync(_path.default.resolve(__dirname, '../../server.crt'))
};

_spdy.default.createServer(options, app).listen(port, () => {
  console.log(`Listening on port: ${port}`);
});