import { configureStore } from '@reduxjs/toolkit';
import rulesReducer from './rulesSlice'

export const store = configureStore({
  reducer: {
    rules: rulesReducer,
  },
});

//Show rules state
