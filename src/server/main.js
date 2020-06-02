import path from 'path';
import express from 'express';
import React from 'react';
import compression from 'compression';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { Provider } from 'react-redux';
import configureStore from '../Shared/store/createStore';
import sagas from '../Shared/Sagas';

const app = express();

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}

app.use(
  compression({
    level: 2, // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress, // set predicate to determine whether to compress
  }),
);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../../public')));

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require, import/no-extraneous-dependencies */
  const { default: webpackConfig } = require('../../webpack.config.babel');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  /* eslint-enable global-require, import/no-extraneous-dependencies */

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      logLevel: 'silent',
      publicPath: '/dist/web',
      writeToDisk(filePath) {
        return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
      },
    }),
  );
}

const nodeStats = path.resolve(__dirname, '../../public/dist/node/loadable-stats.json');

const webStats = path.resolve(__dirname, '../../public/dist/web/loadable-stats.json');

app.get('*', (req, res) => {
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
  const { default: App } = nodeExtractor.requireEntrypoint();

  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  const jsx = webExtractor.collectChunks(<App />);

  const store = configureStore();
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {jsx}
      </StaticRouter>
    </Provider>,
  );

  const preloadedState = store.getState();

  store.runSaga(sagas);

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
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                  /</g,
                  '\\u003c',
                )}
            </script>
          ${webExtractor.getScriptTags()}
        </body>
      </html>
    `);

  store.close();
});

// eslint-disable-next-line no-console
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
