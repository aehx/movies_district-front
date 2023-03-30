interface TMDBMovieDates {
  maximum: string;
  minimum: string;
}

export interface TMDBMovieData {
  trailerKey: string;
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

export interface TMDBVideoData {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface TMDBVideoResponse {
  id: number;
  results: [] | TMDBVideoData[];
}
