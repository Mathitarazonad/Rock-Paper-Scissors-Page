import { configureStore } from '@reduxjs/toolkit';
import rulesReducer from './rulesSlice';
import gamemodeReducer from './gamemodeSlice';

export const store = configureStore({
  reducer: {
    rules: rulesReducer,
    gamemodes: gamemodeReducer,
  },
});

//Show rules state
