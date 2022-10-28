import { createSlice } from "@reduxjs/toolkit";
import { THEMES_NAMES } from "../../const/const";
import { ThemeType } from "../../types/types";

const initialState = {
  theme: THEMES_NAMES.DAY as ThemeType,
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
