import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userChoice: '',
  computerChoice: '',
};

const choicesSlice = createSlice({
  name: 'choices',
  initialState,
  reducers: {
    setUserChoice: (state, actions) => {
      state.userChoice = actions.payload;
    },
  },
});

export default choicesSlice.reducer;
export const { setUserChoice } = choicesSlice.actions;
