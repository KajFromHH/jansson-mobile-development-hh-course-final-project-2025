//For reanimated plugin, please read documentations:
//https://docs.expo.dev/versions/latest/config/babel/
//https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/

const { getDefaultConfig } = require("expo/metro-config");
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');


module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    return wrapWithReanimatedMetroConfig(config);
})();