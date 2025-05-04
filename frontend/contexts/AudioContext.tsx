import { useAudioPlayer } from "expo-audio";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AudioContextType } from "../types";

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [playMusic, setPlayMusic] = useState(true);
    const [playSoundEffect, setPlaySoundEffect] = useState(true);


    //There is no Audio object with loops and other method,
    //we need to use custom hooks, for this app specifically useAudioPlayer.
    const gameMusic = useAudioPlayer(require('../assets/music/Synthpop_Free_Java_Cut_30_Ovani.wav'));
    const gameSoundEffect = useAudioPlayer(require('../assets/soundeffects/Signal_Positive_Bells_B_Ovani.wav'));


    // Play or pause music depending the state of checkbox.
    useEffect(() => {
        if (playMusic) {
            gameMusic.play();
        } else {
            gameMusic.pause();
        }
    }, [playMusic, gameMusic]);

    // Play or pause sound effects depending the state of checkbox.
    useEffect(() => {
        if (playSoundEffect) {
            gameSoundEffect.play();
        } else {
            gameSoundEffect.pause();
        }
    }, [playSoundEffect, gameSoundEffect]);

    //Since Expo-audio and its useAudioPlayer hook has no method to check IsLooping, only boolean loop,
    //see official document: https://docs.expo.dev/versions/latest/sdk/audio/,
    //Co-pilot suggest to check music state via time intervals.

    useEffect(() => {
        const interval = setInterval(async () => {
            if (gameMusic?.isLoaded && playMusic) {
                gameMusic.play();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [gameMusic?.isLoaded, playMusic]);
    //The Co-pilot suggested first gameMusic?.loaded method, but such method isn't exposed in Audio.
    //Hence, I checked equivalent from Expo Audio documentation and found isLoaded.
    //Seems to work.


    const toggleMusic = (value: boolean) => {
        setPlayMusic(value);
    }

    const toggleSoundEffect = (value: boolean) => {
        setPlaySoundEffect(value);
    }

    const playButtonSound = () => {
        if (playSoundEffect) {
            gameSoundEffect.play();
        }
    }

    return (
        <AudioContext.Provider value={{
            playMusic,
            toggleMusic,
            playSoundEffect,
            toggleSoundEffect,
            playButtonSound
        }}>
            {children}
        </AudioContext.Provider>
    );

};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider.')
    }
    return context;
};