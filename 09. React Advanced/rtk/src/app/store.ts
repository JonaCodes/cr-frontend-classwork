import { configureStore } from "@reduxjs/toolkit";
import movieNightReducer from "../features/movieNight/movieNightSlice";

export const store = configureStore({
  reducer: {
    movieNight: movieNightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
