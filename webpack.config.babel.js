/* eslint-disable global-require */
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import LoadablePlugin from '@loadable/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
// import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const DIST_PATH = path.resolve(__dirname, 'public/dist');
const production = process.env.NODE_ENV === 'production';
const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const getConfig = (target) => ({
  name: target,
  mode: development ? 'development' : 'production',
  target,
  entry: `./src/client/main-${target}.js`,
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            caller: { target },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  externals: target === 'node' ? ['@loadable/component', nodeExternals()] : undefined,
  output: {
    path: path.join(DIST_PATH, target),
    filename: production ? '[name]-bundle-[chunkhash:8].js' : '[name].js',
    publicPath: `/dist/${target}/`,
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
  },
  plugins: [
    new WebpackPwaManifest({
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      start_url: '/',
      theme_color: '#000000',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('src/client/assets/icons/ios-icon.png'),
          sizes: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve('src/client/assets/icons/ios-icon.png'),
          size: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup',
        },
        {
          src: path.resolve('src/client/assets/icons/android-icon.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android'),
        },
        {
          src: path.resolve('src/client/assets/icons/favicon-icon.png'),
          sizes: [16, 32, 96],
          destination: path.join('icons', 'favicon'),
        },
        {
          src: path.resolve('src/client/assets/icons/ms-icon.png'),
          sizes: [144],
          destination: path.join('icons', 'msIcon'),
        },
      ],
      fingerprints: false,
    }),
    new LoadablePlugin(),
    new MiniCssExtractPlugin(),
    new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://hn.algolia.com/api/'),
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('.css$'),
          handler: 'CacheFirst',
        },
        {
          urlPattern: new RegExp('.(png|svg|jpg|jpeg)$'),
          handler: 'CacheFirst',
        },
      ],
    }),
  ],
});

export default [getConfig('web'), getConfig('node')];
