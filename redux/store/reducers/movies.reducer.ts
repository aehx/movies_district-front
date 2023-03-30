import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";
import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  genreToDisplay: string;
  topTenTrailer: null | number;
  trailerToDisplay: null | number;
  movieInfoToDisplay: TMDBMovieData | null;
  searchedMovies: string | null;
}

const initialState: CounterState = {
  topTenTrailer: null,
  trailerToDisplay: null,
  genreToDisplay: "",
  movieInfoToDisplay: null,
  searchedMovies: null,
};

export const counterSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addTopTenTrailer: (state, action: PayloadAction<number | null>) => {
      state.topTenTrailer = action.payload;
    },
    addGenreToDisplay: (state, action: PayloadAction<string>) => {
      state.genreToDisplay = action.payload;
    },
    addTrailerToDisplay: (state, action: PayloadAction<number | null>) => {
      state.trailerToDisplay = action.payload;
    },
    addMovieInfoToDisplay: (state, action: PayloadAction<TMDBMovieData>) => {
      state.movieInfoToDisplay = action.payload;
    },
    addSearchedMovies: (state, action: PayloadAction<string>) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const {
  addTopTenTrailer,
  addGenreToDisplay,
  addTrailerToDisplay,
  addMovieInfoToDisplay,
  addSearchedMovies,
} = counterSlice.actions;

export type CounterSelector = (state: RootState) => CounterState;
export const selectCount: CounterSelector = (state: RootState) => state.movies;

export default counterSlice.reducer;
