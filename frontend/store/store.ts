// Read official Redux documentation:
// https://react-redux.js.org/
// Redux was chosen for its optimised perfomance for Android devices. 

import { configureStore } from '@reduxjs/toolkit';
import saveReducer from './saveSlice';

const reduxStore = configureStore({
    reducer: {
        save: saveReducer,
    },
});

export default reduxStore;

