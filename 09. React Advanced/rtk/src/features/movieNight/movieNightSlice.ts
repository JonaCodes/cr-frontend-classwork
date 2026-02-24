import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  id: string;
  title: string;
  votes: number;
  watched: boolean;
}

export type MovieFilter = "all" | "unwatched" | "watched";

const movieNightSlice = createSlice({
  name: "movieNight",

  initialState: {
    movies: [
      { id: "m-1", title: "The Lion King", votes: 2, watched: false },
      { id: "m-2", title: "Fellowship of the Ring", votes: 9, watched: true },
      { id: "m-3", title: "Troy", votes: 1, watched: false },
    ],

    filter: "all",
  },

  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.movies.push({
        id: `m-${state.movies.length + 1}`,
        title: action.payload,
        votes: 0,
        watched: false,
      });
    },

    upvoteMovie: (state, action: PayloadAction<string>) => {
      const movie = state.movies.find((item) => item.id === action.payload);
      if (movie) {
        movie.votes += 1;
      }
    },

    downvoteMovie: (state, action: PayloadAction<string>) => {
      const movie = state.movies.find((item) => item.id === action.payload);
      if (movie && movie.votes > 0) {
        movie.votes -= 1;
      }
    },

    toggleWatched: (state, action: PayloadAction<string>) => {
      const movie = state.movies.find((item) => item.id === action.payload);
      if (movie) {
        movie.watched = !movie.watched;
      }
    },

    setFilter: (state, action: PayloadAction<MovieFilter>) => {
      state.filter = action.payload;
    },

    resetVotes: (state) => {
      state.movies.forEach((movie) => {
        movie.votes = 0;
      });
    },
  },
});

export const {
  addMovie,
  upvoteMovie,
  downvoteMovie,
  toggleWatched,
  setFilter,
  resetVotes,
} = movieNightSlice.actions;

export default movieNightSlice.reducer;
