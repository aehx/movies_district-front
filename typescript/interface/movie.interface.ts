interface TMDBMovieDates {
  maximum: string;
  minimum: string;
}
export interface MovieResponse {
  upcoming: TMDBMovieData[] | [];
  top_rated: TMDBMovieData[] | [];
  topTenPlaylist: TMDBMovieData[] | [];
  popular: TMDBMovieData[] | [];
  now_playing: TMDBMovieData[] | [];
}
export interface TMDBMovieData {
  trailerKey?: string;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[] | [];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  total_pages: number;
  total_results: number;
  style?: string;
}

export interface TMDBResponse {
  dates?: TMDBMovieDates;
  page: number;
  results: TMDBMovieData[];
  total_pages: number;
  total_results: number;
}
export interface TMDBMovieById {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
