import { TMDBMovieById, TMDBMovieData } from "./movie.interface";

interface GenreOfMovie {
  top_rated?: TMDBMovieData[] | [] | undefined;
  upcoming?: TMDBMovieData[] | [] | undefined;
  now_playing?: TMDBMovieData[] | [] | undefined;
  popular?: TMDBMovieData[] | [] | undefined;
}

export interface PropsArrayOfMovieData {
  [key: string]: TMDBMovieData[] | undefined | [];
}

export interface PropsWithMultipleArrayOfMovieData {
  movieToDisplay: GenreOfMovie;
}

export interface PropsPlaylist {
  movieToDisplay: TMDBMovieData[] | undefined | [];
  suggestedToDisplay: TMDBMovieData[] | undefined | [];
}
export interface PropsTopTen {
  movieToDisplay: TMDBMovieData[] | [];
}
export interface PropsSuggested {
  suggestedToDisplay: TMDBMovieData[] | undefined | [];
}

export interface PropsButtonLink {
  href: string;
  movieInfo?: TMDBMovieData | TMDBMovieById;
  title: string;
  genre?: string;
}

export interface PropsTrendingNavbar {
  activeColor: string | number;
  moviesToReturn: (genre: string, navStyle: number | string) => void;
}

export interface PropsPageList {
  changePage: (page: number) => void;
  maxPages: number | null;
  page: number;
}

export interface PropsNavLink {
  href: string;
  text: string;
}

export interface PropsGridSlider {
  slidesPerView: number;
  rows: number;
  slides: TMDBMovieData[] | TMDBMovieById[] | null | [];
  whichGrid: string;
}
export type PropsPlaylistChild = Partial<PropsPlaylist>;

export interface PropsMovieInfos {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  style: string;
  title: string;
  trailerKey: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
