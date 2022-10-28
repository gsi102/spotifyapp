import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload.data;
    },
  },
});

export const { setTheme } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
