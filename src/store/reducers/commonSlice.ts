import { createSlice } from "@reduxjs/toolkit";
import { THEMES_NAMES } from "../../const/const";
import { ThemeType } from "../../types/types";

let theme = localStorage.getItem("theme");
if (theme) theme = JSON.parse(theme);
else theme = THEMES_NAMES.DAY;

const initialState = {
  theme: theme as ThemeType,
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
