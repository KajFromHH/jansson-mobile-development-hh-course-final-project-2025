//This is a React Navigation used for
// type-check screens and their params.

//This provides better intelliSense 
//and type safety.

//Source: https://reactnavigation.org/docs/typescript/?config=dynamic

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProgressData = {
    textRead: number;
    choicesMade: string[];
};

export type GameData = {
    scene: string;
    progress: ProgressData;
};

export type AudioContextType = {
    playMusic: boolean;
    toggleMusic: (value: boolean) => void;
    playSoundEffect: boolean;
    toggleSoundEffect: (value: boolean) => void;
    playButtonSound: () => void;
};

export type RootStackParamList = {
    mainMenu: { scene: string; progress: ProgressData };
    scene02: { scene: string; progress: ProgressData };
    scene03: { scene: string; progress: ProgressData };
    scene04: { scene: string; progress: ProgressData };
    endingA: { scene: string; progress: ProgressData };
    Settings: { scene: string; progress: ProgressData };
    AudioConfigs: { scene: string; progress: ProgressData };
};

export type settingsProps = { navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'> };
export type audioProps = { navigation: NativeStackNavigationProp<RootStackParamList, 'AudioConfigs'> };