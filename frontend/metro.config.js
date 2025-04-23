//This is compulsory react native SVG transformer and render for the project.
//Source: https://github.com/kristerkari/react-native-svg-transformer?tab=readme-ov-file

//For reanimated plugin, please read documentations:
//https://docs.expo.dev/versions/latest/config/babel/
//https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/

const { getDefaultConfig } = require("expo/metro-config");
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');


module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    config.transformer = {
        ...transformer,
        babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
    };
    config.resolver = {
        ...resolver,
        assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...resolver.sourceExts, "svg"]
    };

    return wrapWithReanimatedMetroConfig(config);
})();