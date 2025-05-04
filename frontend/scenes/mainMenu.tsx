import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, Pressable, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAudio } from "../contexts/AudioContext";
import { initialState } from "../store/saveSlice";
import { mainStyle } from "../styles/mainStyle";
import { RootStackParamList } from "../types";

import React from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming
} from 'react-native-reanimated';

const duration = 1000; //value is in millisecond, hence 1000 ms = 1s

type mainMenuProps = NativeStackScreenProps<RootStackParamList, 'mainMenu'>;

export default function mainMenu({ navigation }: mainMenuProps) {
    const route = useRoute<RouteProp<RootStackParamList, 'mainMenu'>>();
    const { playButtonSound } = useAudio();

    //Followed example from Reanimated documentation by swmansion, section "Configuring withTiming"
    //source: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/customizing-animation
    //Then I needed help from Co-pilot since image wasn't visible in the screen anymore.

    const defaultAnimation = useSharedValue(0);

    const upAndDownAnimation = useAnimatedStyle(() => ({
        transform: [{ translateY: defaultAnimation.value }],
    }));

    React.useEffect(() => {
        defaultAnimation.value = withRepeat(
            withTiming(-30, { duration }),
            -1,
            true
        );
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={mainStyle.container}>

                <ImageBackground
                    source={require("../assets/images/Background.png")}
                    style={mainStyle.background}
                    resizeMode="cover"
                >

                    <Animated.Image
                        style={[mainStyle.characterMenu, upAndDownAnimation]}
                        source={require("../assets/images/Character_happy.png")}
                        resizeMode="contain"
                    />

                    <Image
                        style={mainStyle.logo}
                        source={require("../assets/images/Logo.png")}
                        resizeMode="contain"
                    />


                    <Pressable
                        style={mainStyle.button}
                        onPress={() => {
                            playButtonSound();
                            navigation.navigate('scene02', { scene: 'scene02', progress: initialState.progress });
                        }}
                    >
                        <Text style={mainStyle.buttonText}>
                            New game!
                        </Text>
                    </Pressable>
                    <Pressable
                        style={mainStyle.button}
                        onPress={() => {
                            playButtonSound();
                            navigation.navigate('Settings', { scene: 'mainMenu', progress: initialState.progress })
                        }}
                    >
                        <Text style={mainStyle.buttonText}>
                            Settings
                        </Text>
                    </Pressable>


                </ImageBackground >
            </SafeAreaView >
        </SafeAreaProvider>

    );
}