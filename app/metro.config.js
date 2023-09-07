const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

const mergedConfig = mergeConfig(getDefaultConfig(__dirname), config);

const path = require('path');

module.exports = {
  ...mergedConfig,
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, 'targets'),
  ],
};
