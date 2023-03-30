import { TMDBMovieData } from "./movie.interface";

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

export interface PropsLatest {
  categoryTitle: string;
  categoryToFetch: string;
  movieToDisplay: TMDBMovieData[] | undefined | [];
}

export interface PropsPlaylist {
  movieToDisplay: TMDBMovieData[] | undefined | [];
  suggestedToDisplay: TMDBMovieData[] | undefined | [];
  trailerToDisplay: string | {};
}
export interface PropsTopTen {
  movieToDisplay: TMDBMovieData[] | undefined | [];
  trailerToDisplay: string | {};
}
export interface PropsSuggested {
  suggestedToDisplay: TMDBMovieData[] | undefined | [];
}

export interface PropsButtonLink {
  href: string;
  movieInfo?: TMDBMovieData;
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

export interface PropsRowSlider {
  direction: "horizontal" | "vertical" | undefined;
  nbrOfSlides: number;
  slides: TMDBMovieData[] | undefined;
  whichSlide: string;
}

export interface PropsGridSlider {
  slidesPerView: number;
  rows: number;
  slides: TMDBMovieData[] | null | [];
  whichGrid: string;
}
export type PropsPlaylistChild = Partial<PropsPlaylist>;
