import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showRules : false
}

const showRulesSlice = createSlice({
  name: 'showRules',
  initialState,
  reducers : {
    displayRules : (state) => {
      state.showRules = true
    },
    hideRules : (state) => {
      state.showRules = false
    }
  }
});

export default showRulesSlice.reducer;
export const {displayRules, hideRules} = showRulesSlice.actions;

