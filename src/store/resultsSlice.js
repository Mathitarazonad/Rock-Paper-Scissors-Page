import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameResult: '',
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setGameResult : (state, action) => {
      state.gameResult = action.payload;
    }
  },
});

export default resultsSlice.reducer;