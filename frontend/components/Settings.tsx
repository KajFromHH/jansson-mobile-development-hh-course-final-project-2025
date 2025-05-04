
import { RouteProp, useRoute } from "@react-navigation/native";
import React from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useAudio } from "../contexts/AudioContext";
import { mainStyle } from '../styles/mainStyle';
import { RootStackParamList, settingsProps } from '../types';
import { loadScene, saveScene } from '../utils/saveAndLoadScene';

//Doing same screen function as in the scenes.


export default function Settings({ navigation }: settingsProps) {
    const route = useRoute<RouteProp<RootStackParamList>>();
    const { playButtonSound } = useAudio();

    const { scene } = route.params ?? { scene: '' };

    return (
        <SafeAreaView style={mainStyle.container}>
            <Button
                title="Save"
                onPress={() => {
                    playButtonSound();
                    saveScene(scene, { textRead: 0, choicesMade: [] });
                }}
            />
            <Button
                title="Load"
                onPress={async () => {
                    playButtonSound();
                    const successfullyLoadScene = await loadScene();
                    if (successfullyLoadScene) {
                        console.log(`Scene is successfully loaded: "${successfullyLoadScene.scene}"`, successfullyLoadScene.scene);
                        navigation.navigate(successfullyLoadScene.scene as keyof RootStackParamList,
                            { scene: successfullyLoadScene.scene, progress: successfullyLoadScene.progress }
                        );
                    }
                }}
            />
            <Button
                title="Audio"
                onPress={() => {
                    playButtonSound();
                    console.log("Navigate into Audio");
                    navigation.navigate('AudioConfigs', { scene: route.params.scene, progress: route.params.progress })
                }}
            />
            <Button
                title="Close"
                onPress={() => {
                    playButtonSound();
                    navigation.goBack();
                }}
            />
        </SafeAreaView>

    );

};