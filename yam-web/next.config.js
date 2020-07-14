/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const withPrefresh = require('@prefresh/next');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
  },
});

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Move Preact into the framework chunk instead of duplicating in routes:
    const splitChunks = config.optimization && config.optimization.splitChunks;
    if (splitChunks) {
      const { cacheGroups } = splitChunks;
      const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, { test });
        // if you want to merge the 2 small commons+framework chunks:
        // cacheGroups.commons.name = 'framework';
      }
    }

    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {});
    aliases.react = aliases['react-dom'] = 'preact/compat';

    // Automatically inject Preact DevTools:
    if (dev && !isServer) {
      const { entry } = config;
      config.entry = () =>
        entry().then((entries) => {
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || []);
          return entries;
        });
    }

    const isProduction = config.mode === 'production';

    if (isServer || dev) {
      return config;
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(isProduction),
      }),
    );

    if (!isProduction) {
      return config;
    }

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    config.plugins.push(
      new BrotliPlugin({
        asset: '[path].br[query]',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    );

    return config;
  },
};

module.exports = withPlugins([withPrefresh, withPWA, withCSS, withBundleAnalyzer], nextConfig);
