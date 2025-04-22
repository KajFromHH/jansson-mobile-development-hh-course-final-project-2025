
// Read official documents

//Expo checkbox: https://docs.expo.dev/versions/latest/sdk/checkbox/
//Expo simple Audio loop: https://docs.expo.dev/versions/latest/sdk/audio-av/

import { RouteProp, useRoute } from "@react-navigation/native";
import { Audio } from "expo-av";
import Checkbox from "expo-checkbox";
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from '../styles/mainStyle';
import { RootStackParamList, audioProps } from './types';


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

    return (
        <SafeAreaView style={mainStyle.container}>
            <View>
                <Text>Music: </Text>
                <Checkbox value={playMusic} onValueChange={setPlayMusic} />

            </View>
            <View>
                <Text>Sound: </Text>
                <Checkbox value={playSoundEffect} onValueChange={setPlaySoundEffect} />
            </View>
            <Button
                title="Close"
                onPress={() => navigation.goBack()}
            />
        </SafeAreaView>

    );

};