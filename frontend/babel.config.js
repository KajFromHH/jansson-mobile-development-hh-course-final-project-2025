//For reanimated plugin, please read documentations:
//https://docs.expo.dev/versions/latest/config/babel/
//https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
