import { configureStore } from '@reduxjs/toolkit';
import rulesReducer from './rulesSlice';
import gamemodeReducer from './gamemodeSlice';
import choicesReducer from './choicesSlice';
import resultsReducer from './resultsSlice';

export const store = configureStore({
  reducer: {
    rules: rulesReducer,
    gamemodes: gamemodeReducer,
    choices: choicesReducer,
    results: resultsReducer,
  },
});

//Show rules state
