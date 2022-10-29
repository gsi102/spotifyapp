import { createSlice } from "@reduxjs/toolkit";
import { THEMES_NAMES } from "../../const/const";
import { ThemeType } from "../../types/types";

let theme = localStorage.getItem("theme");
if (theme) theme = JSON.parse(theme);
else theme = THEMES_NAMES.DAY;

const initialState = {
  theme: theme as ThemeType,
  newReleases: [],
  featured: [],
  browse: [],
  show: {
    newReleases: [],
    featured: [],
    browse: [],
  },
} as { [key: string]: any };

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload.data;
    },
    setCategoryItems: (state, action) => {
      const categoryType = action.payload.type;
      state[categoryType] = action.payload.data;
      state.show[categoryType] = action.payload.data;
    },
    filterItems: (state, action) => {
      if (action.payload.searchInput === null) {
        state.show.newReleases = [...state.newReleases];
        state.show.featured = [...state.featured];
        state.show.browse = [...state.browse];
        return;
      }

      const searchInput = action.payload.searchInput.toLowerCase();

      const filterFunc = (baseState: any[]) => {
        const filterMessages = baseState.filter((obj: any) =>
          obj.name.toLowerCase().includes(searchInput)
        );
        return filterMessages;
      };

      state.show.newReleases = filterFunc(state.newReleases);
      state.show.featured = filterFunc(state.featured);
      state.show.browse = filterFunc(state.browse);
    },
  },
});

export const { setTheme, setCategoryItems, filterItems } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
