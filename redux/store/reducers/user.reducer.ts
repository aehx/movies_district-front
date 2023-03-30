import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";
import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  userInfos: null | {
    username: string;
    accessToken: string;
    refreshToken: string;
    error?: string;
  };
}

const initialState: CounterState = {
  userInfos: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfos: (
      state,
      action: PayloadAction<{
        username: string;
        accessToken: string;
        refreshToken: string;
        error?: string;
      } | null>
    ) => {
      state.userInfos = action.payload;
    },
  },
});

export const { addUserInfos } = counterSlice.actions;

export type CounterSelector = (state: RootState) => CounterState;
export const selectCount: CounterSelector = (state: RootState) => state.user;

export default counterSlice.reducer;
