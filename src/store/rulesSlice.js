import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

export const showRulesSlice = createSlice({
  name: 'showRules',
  value: false,
  reducers : {
    displayRules: (state) => {
      state.value = true;
    },
    closeRules: (state) => {
      state.value = false;
    }
  }
})