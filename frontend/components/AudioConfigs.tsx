
// Read official documents

//Expo checkbox: https://docs.expo.dev/versions/latest/sdk/checkbox/
//Expo simple Audio loop: https://docs.expo.dev/versions/latest/sdk/audio-av/

/*
import { RouteProp, useRoute } from "@react-navigation/native";
import { Audio } from "expo-av";
import Checkbox from "expo-checkbox";
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from '../styles/mainStyle';

import { audioProps } from './types';
*/
/*
export default function AudioConfigs({ navigation }: audioProps) {
    const route = useRoute<RouteProp<RootStackParamList>>();

    const [music, setMusic] = useState<Audio.Sound | null>(null);
    const [soundEffect, setSoundEffect] = useState<Audio.Sound | null>(null);
    const [playMusic, setPlayMusic] = useState(true);
    const [playSoundEffect, setPlaySoundEffect] = useState(true);

    useEffect(() => {
        async function loadAudio() {
            const gameMusic = new Audio.Sound();
            const gameSoundEffect = new Audio.Sound();

            try {
                await gameMusic.loadAsync(require('../assets/music/Casual_Tiki_Party_Main.wav'))
                await gameSoundEffect.loadAsync(require('../assets/soundeffects/Yes_Button.wav'))
                console.log(`Playing music ${gameMusic}`)
                gameMusic.setIsLoopingAsync(true);
                gameSoundEffect.setIsLoopingAsync(true);
                setMusic(gameMusic);
                setSoundEffect(gameSoundEffect);
            }
            catch (error) {
                console.error('Error loading audio: ', error)
            }
        }
        loadAudio();
        return () => {
            if (music) {
                music.unloadAsync();
            }
            if (soundEffect) {
                soundEffect.unloadAsync();
            }
        }

    }, []);

    useEffect(() => {
        if (music) {
            if (playMusic) {
                music.playAsync();
            } else {
                music.pauseAsync();
            }
        }
    }, [playMusic]);

    useEffect(() => {
        if (soundEffect) {
            if (playSoundEffect) {
                soundEffect.playAsync();
            } else {
                soundEffect.pauseAsync();
            }
        }
    }, [playSoundEffect]);
    */


// Read official documents

//Expo checkbox: https://docs.expo.dev/versions/latest/sdk/checkbox/
//Expo improved Audio library,
// due expo-av audio is depracated: https://docs.expo.dev/versions/latest/sdk/audio/

import { useAudioPlayer } from "expo-audio";
import Checkbox from "expo-checkbox";
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from '../styles/mainStyle';

import { audioProps } from './types';


export default function AudioConfigs({ navigation }: audioProps) {
    const [playMusic, setPlayMusic] = useState(true);
    const [playSoundEffect, setPlaySoundEffect] = useState(true);
    const gameMusic = useAudioPlayer(require('../assets/music/Synthpop_Free_Java_Cut_30_Ovani.wav'))
    const gameSounds = useAudioPlayer(require('../assets/music/Synthpop_Free_Java_Cut_30_Ovani.wav'))

    return (
        <SafeAreaView style={mainStyle.container}>
            <View style={mainStyle.section}>
                <Text style={mainStyle.checkboxText}>
                    Music:
                </Text>
                <Checkbox
                    style={mainStyle.checkbox}
                    value={playMusic}
                    onValueChange={(newValue) => {
                        setPlayMusic(newValue);
                        if (newValue) {
                            gameMusic.play();
                        } else {
                            gameMusic.pause();
                        }
                    }}
                />

            </View>
            <View style={mainStyle.section}>
                <Text style={mainStyle.checkboxText}>
                    Sound:
                </Text>
                <Checkbox
                    style={mainStyle.checkbox}
                    value={playSoundEffect}
                    onValueChange={() => setPlaySoundEffect}
                />
            </View>
            <Pressable
                style={mainStyle.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={mainStyle.buttonText}>
                    Exit
                </Text>
            </Pressable>
        </SafeAreaView>

    );

};
