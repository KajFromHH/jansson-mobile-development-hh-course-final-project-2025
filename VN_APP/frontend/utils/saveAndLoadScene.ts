// Read official async-storage documentation:
// https://react-native-async-storage.github.io/async-storage/
// There are known limits of storing data in Android devices via SQLite.
// Hence amount of savedata will be limited.

// Read official Redux documentation:
// https://react-redux.js.org/
// Redux was chosen for its optimised perfomance for Android devices. 

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameData, ProgressData } from '../components/types';
import { setSaveGame } from '../store/saveSlice';
import reduxStore from '../store/store';


// Saving scene as current game state.
// Saved current game will be stored as 
// string value into SQLite (Android).

export const saveScene = async (currentScene: string, currentProgress: ProgressData) => {

    const saveCurrentGame: GameData = {
        scene: currentScene,
        progress: currentProgress,
    };

    try {
        await AsyncStorage.setItem('saveGame', JSON.stringify(saveCurrentGame));
        reduxStore.dispatch(setSaveGame(saveCurrentGame))
        console.log('Scene saved successfully!')
    } catch (error) {
        console.error('Error saving scene: ', error);
    }
};


export const loadScene = async (): Promise<GameData | null> => {
    try {
        const getSavedGameString = await AsyncStorage.getItem('saveGame');
        if (getSavedGameString) {
            const loadGame: GameData = JSON.parse(getSavedGameString);
            reduxStore.dispatch(setSaveGame(loadGame));
            console.log('Scene loaded successfully.')
            return loadGame;
        } else {
            console.log('No saved scene found.')
            return null;
        }
    }
    catch (error) {
        console.error('Error loading scene: ', error);
        return null;
    }
};