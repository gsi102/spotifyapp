import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { commonReducer } from "./reducers/commonSlice";
import { spotifyAppAPI } from "../services/spotifyAppService";

const initialState = {};

export const store = configureStore({
  reducer: {
    common: commonReducer,
    [spotifyAppAPI.reducerPath]: spotifyAppAPI.reducer,
  },
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyAppAPI.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
