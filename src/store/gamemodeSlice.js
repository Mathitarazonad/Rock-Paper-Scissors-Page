import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  normalGamemode: false,
  gamemodeSelected: false,
};

const GamemodeSlice = createSlice({
  name: 'gamemodes',
  initialState,
  reducers: {
    setNormalGamemode: (state) => {
      state.normalGamemode = true;
      state.gamemodeSelected = true;
    },
    setBonusGamemode: (state) => {
      state.normalGamemode = false;
      state.gamemodeSelected = true;
    },
    resetGamemode: (state) => {
      state.gamemodeSelected = false;
      state.normalGamemode = false;
    }
  },
});

export const { setNormalGamemode, setBonusGamemode, resetGamemode } = GamemodeSlice.actions;
export default GamemodeSlice.reducer;
