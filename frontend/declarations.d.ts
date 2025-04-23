//This is compulsory SVG render for typescript.

//Source: https://github.com/kristerkari/react-native-svg-transformer?tab=readme-ov-file

declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}