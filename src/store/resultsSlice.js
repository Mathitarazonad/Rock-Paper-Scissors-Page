import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameResult: '',
  points: 0,
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setGameResult : (state, action) => {
      state.gameResult = action.payload;
    },
    setCurrentPoints : (state, action) => {
      if(action.payload === 'player') {
        state.points += 1;
      } else if (action.payload === 'computer') {
        if (state.points !== 0) {
          state.points -= 1;
        }
      }
    }
  },
});

export default resultsSlice.reducer;
export const { setGameResult, setCurrentPoints } = resultsSlice.actions;