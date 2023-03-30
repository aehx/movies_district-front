import { AxiosError } from "axios";
import { Falsy } from "../../types/types";
import { TMDBMovieData, TMDBResponse } from "../movie.interface";
export type Url = { [key: string]: string };

export interface AxiosResult {
  movieData: TMDBResponse;
}

export interface MoviePromise {
  movieGenre: string;
  movieData: TMDBResponse;
}

export interface MovieResponse {
  upcoming?: TMDBMovieData[] | [];
  top_rated?: TMDBMovieData[] | [];
  topTenPlaylist?: TMDBMovieData[] | [];
  popular?: TMDBMovieData[] | [];
  now_playing?: TMDBMovieData[] | [];
}

export interface MovieGenreAndData {
  movieGenre: string;
  movieData: TMDBMovieData[];
}

export interface HookResults {
  response: null | MovieResponse;
  error: null | AxiosError;
  loading: boolean;
}
