import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, action) => {
      const { data } = action.payload;
      state.games = data;
    },
  },
});

export const { getData } = dataSlice.actions;
export default dataSlice.reducer;
