import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gamemode: undefined,
};

const GamemodeSlice = createSlice({
  name: 'gamemodes',
  initialState,
  reducers: {
    setNormalGamemode: (state) => {
      state.gamemode = true;
    },
    setBonusGamemode: (state) => {
      state.gamemode = false;
    },
  },
});

export const { setNormalGamemode, setBonusGamemode } = GamemodeSlice.actions;
export default GamemodeSlice.reducer;
