import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies.reducer";
import userReducer from "./reducers/user.reducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
