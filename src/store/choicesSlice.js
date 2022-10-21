import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userChoice: '',
  computerChoice: '',
};

const choicesSlice = createSlice({
  name: choices,
  initialState,
  reducers: {
    setUserChoice: (state, action) => {
      console.log(action);
    },
  },
});

export default choicesSlice;
export const { setUserChoice } = choicesSlice.actions;
