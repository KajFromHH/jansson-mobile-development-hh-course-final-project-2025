import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAudio } from "../contexts/AudioContext";
import { mainStyle } from "../styles/mainStyle";
import { RootStackParamList } from "../types";

import React from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming
} from 'react-native-reanimated';

const duration = 1000;

type scene04Props = NativeStackScreenProps<RootStackParamList, 'scene04'>;

export default function scene04({ navigation }: scene04Props) {
    const route = useRoute<RouteProp<RootStackParamList, 'scene04'>>();
    const { playButtonSound } = useAudio();

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
                    <View style={mainStyle.textView}>
                        <Text style={mainStyle.text}>
                            Oh no! The milk was expired by an year! Now our ... is ruined! So sad!
                        </Text>
                    </View>


                    <Animated.Image
                        style={[mainStyle.characterMenu, upAndDownAnimation]}
                        source={require("../assets/images/Character_sad.png")}
                        resizeMode="contain"
                    />


                    <View style={mainStyle.buttonView}>
                        <Pressable
                            style={mainStyle.button}
                            onPress={() => {
                                navigation.navigate('endingA', { scene: 'endingA', progress: route.params.progress })
                                playButtonSound();
                            }}>
                            <Text style={mainStyle.buttonText}>
                                Next...
                            </Text>
                        </Pressable>
                        <Pressable
                            style={mainStyle.button}
                            onPress={() => {
                                navigation.navigate('Settings', { scene: route.params.scene, progress: route.params.progress })
                                playButtonSound();
                            }}
                        >
                            <Text style={mainStyle.buttonText}>
                                Settings
                            </Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}