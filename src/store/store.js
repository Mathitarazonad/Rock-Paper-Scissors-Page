import { configureStore } from '@reduxjs/toolkit';
import rulesReducer from './rulesSlice';
import gamemodeReducer from './gamemodeSlice';
import choicesReducer from './choicesSlice';

export const store = configureStore({
  reducer: {
    rules: rulesReducer,
    gamemodes: gamemodeReducer,
    choices: choicesReducer,
  },
});

//Show rules state
