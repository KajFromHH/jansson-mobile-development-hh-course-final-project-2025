
// Read official documents

//Expo checkbox: https://docs.expo.dev/versions/latest/sdk/checkbox/
//Expo improved Audio library,
// due expo-av audio is depracated: https://docs.expo.dev/versions/latest/sdk/audio/

import Checkbox from "expo-checkbox";
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useAudio } from "../contexts/AudioContext";
import { mainStyle } from '../styles/mainStyle';
import { audioProps } from '../types';


export default function AudioConfigs({ navigation }: audioProps) {

    const { playMusic, toggleMusic, playSoundEffect, toggleSoundEffect, playButtonSound } = useAudio();
    return (
        <SafeAreaView style={mainStyle.container}>
            <View style={mainStyle.section}>
                <Text style={mainStyle.checkboxText}>
                    Music:
                </Text>
                <Checkbox
                    style={mainStyle.checkbox}
                    value={playMusic}
                    onValueChange={(newValue) => toggleMusic(newValue)}
                />

            </View>
            <View style={mainStyle.section}>
                <Text style={mainStyle.checkboxText}>
                    Sound:
                </Text>
                <Checkbox
                    style={mainStyle.checkbox}
                    value={playSoundEffect}
                    onValueChange={(newValue) => toggleSoundEffect(newValue)}
                />
            </View>
            <Pressable
                style={mainStyle.button}
                onPress={() => {
                    navigation.goBack();
                    playButtonSound();
                }}
            >
                <Text style={mainStyle.buttonText}>
                    Exit
                </Text>
            </Pressable>
        </SafeAreaView>

    );

};
