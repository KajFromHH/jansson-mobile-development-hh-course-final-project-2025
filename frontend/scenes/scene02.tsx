import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAudio } from "../contexts/AudioContext";
import { mainStyle } from "../styles/mainStyle";
import { ProgressData, RootStackParamList } from "../types";
import { saveScene } from "../utils/saveAndLoadScene";

import React from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming
} from 'react-native-reanimated';

const duration = 1000;

type scene02Props = NativeStackScreenProps<RootStackParamList, 'scene02'>;

export default function scene02({ navigation }: scene02Props) {
    const route = useRoute<RouteProp<RootStackParamList, 'scene02'>>();
    const { playButtonSound } = useAudio();

    const handleChoices = (selectedChoice: string) => {
        const currentScene = route.params.scene;

        const updatedChoice = {
            ...route.params.progress.choicesMade,
            [currentScene]: selectedChoice
        }

        const updateUserChoices: ProgressData = {
            ...route.params.progress,
            choicesMade: updatedChoice
        };
        saveScene(route.params.scene, updateUserChoices);
        navigation.navigate('scene03', { scene: 'scene03', progress: updateUserChoices })

    }

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
                            Help Katti in cooking...
                        </Text>
                    </View>

                    <Animated.Image
                        style={[mainStyle.characterMenu, upAndDownAnimation]}
                        source={require("../assets/images/Character_happy.png")}
                        resizeMode="contain"
                    />



                    <View style={mainStyle.buttonView}>

                        <Pressable
                            style={mainStyle.button}
                            onPress={() => {
                                handleChoices("Cake");
                                playButtonSound();
                            }}
                        >
                            <Text style={mainStyle.buttonText}>
                                Cake
                            </Text>
                        </Pressable>

                        <Pressable
                            style={mainStyle.button}
                            onPress={() => {
                                handleChoices("Pie");
                                playButtonSound();
                            }}
                        >
                            <Text style={mainStyle.buttonText}>
                                Pie
                            </Text>
                        </Pressable>

                        <Pressable
                            style={mainStyle.button}
                            onPress={() => {
                                playButtonSound();
                                navigation.navigate('Settings', { scene: route.params.scene, progress: route.params.progress })
                            }}
                        >
                            <Text style={mainStyle.buttonText}>
                                Settings
                            </Text>
                        </Pressable>
                    </View>

                </ImageBackground >
            </SafeAreaView>
        </SafeAreaProvider >
    );
}