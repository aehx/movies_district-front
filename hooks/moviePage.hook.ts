import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  TMDBMovieData,
  TMDBResponse,
} from "../typescript/interface/movie.interface";

interface HookResults {
  response: null | Response;
  error: null | AxiosError;
  loading: boolean;
}

interface AxiosResult {
  movieData: TMDBResponse;
}

interface Response {
  maxPages: number;
  movieData: TMDBMovieData[];
}

export const getMovieByPage = (category: string, page: number): HookResults => {
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<null | Response>(null);

  useEffect(() => {
    (async () => {
      try {
        const res: AxiosResponse<AxiosResult> = await axios.get(
          `http://localhost:4000/movies/${category}/${page}`
        );
        setResponse({
          maxPages: res.data.movieData.total_pages,
          movieData: res.data.movieData.results,
        });
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);
  return { response, loading, error };
};
