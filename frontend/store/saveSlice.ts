// Read official Redux documentation:
// https://react-redux.js.org/
// Redux was chosen for its optimised perfomance for Android devices. 

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameData } from '../types';

export const initialState: GameData = {
    scene: '',
    progress: {
        textRead: 0,
        choicesMade: [],
    },
};

export const saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers: {
        setSaveGame: (state, action: PayloadAction<GameData>) => {
            state.scene = action.payload.scene;
            state.progress = action.payload.progress;

        },
    },
});

export const { setSaveGame } = saveSlice.actions;
export default saveSlice.reducer;