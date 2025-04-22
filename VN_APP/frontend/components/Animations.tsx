//Please read official reanimated documents:

//https://docs.expo.dev/versions/latest/sdk/reanimated/
//https://docs.swmansion.com/react-native-reanimated/docs/animations/withRepeat

import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { SvgProps } from 'react-native-svg';

interface AnimatedSvgProps extends SvgProps {
    svg: React.FC<SvgProps>;
}
const AnimatedSvg = Animated.createAnimatedComponent((props: AnimatedSvgProps) => {
    const { svg: SvgComponent, ...rest } = props;
    return <SvgComponent {...rest} />
});

export function upAndDownAnimation({ svg: SvgComponent, style }:
    { svg: React.FC<SvgProps>, style: any }) {
    //translateY describes position of y-axis in screen.
    //By default it's useSharedValue(0), which means starting point is y=0.
    //translateY.value is the new value from the starting y=0, either addition,
    //multiplicity or any animated style.
    //Finally the animatedStyle will animate svg image between translateY
    //and translateY.value, i.e. from starting point to new value.

    //https://docs.swmansion.com/react-native-reanimated/docs/core/useAnimatedStyle/

    const translateY = useSharedValue(0);

    translateY.value = withRepeat(
        withTiming(200, { duration: 1000 }),
        -1,
        true,
    );

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        }
    });

    return (
        <AnimatedSvg
            svg={SvgComponent}
            style={[style, animatedStyle]}
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
        />
    );
}