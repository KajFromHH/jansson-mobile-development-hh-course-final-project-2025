//Please read official reanimated documents:

//https://docs.expo.dev/versions/latest/sdk/reanimated/
//https://docs.swmansion.com/react-native-reanimated/docs/animations/withRepeat

//TODO: JOKo poistaa kokonaan tai muokkaa.
/*
import React, { forwardRef } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

interface AnimatedSvgProps extends SvgProps {
    svg: React.FC<SvgProps>;
}
const SvgWrapper = forwardRef<SVGSVGElement, AnimatedSvgProps>(
    (props, ref) => {
        const { svg: SvgComponent, ...rest } = props;
        return <SvgComponent {...rest} />;
    })

const AnimatedSvg = Animated.createAnimatedComponent(SvgWrapper);

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
        withTiming(50, { duration: 1000 }),
        -1,
        true,
    );

    const animatedStyle = useAnimatedStyle(() => {
        console.log('translateY value: ', translateY.value)
        return {
            transform: [{ translateY: translateY.value }]
        }
    });

    return (
        <AnimatedSvg
            svg={SvgComponent}
            style={[style, animatedStyle]}
            width={200}
            height={200}
        />
    );
}
    */