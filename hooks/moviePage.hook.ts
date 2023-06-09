import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  TMDBMovieData,
  TMDBResponse,
} from "../typescript/interface/movie.interface";

interface Response {
  maxPages: number;
  movieData: TMDBMovieData[];
}
export interface AxiosResult {
  movieData: TMDBResponse;
}
export const getMovieByPage = (category: string, page: number) => {
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<null | Response>(null);

  useEffect(() => {
    (async () => {
      try {
        const res: AxiosResponse<AxiosResult> = await axios.get(
          `https://movies-district-back.vercel.app/movies/${category}/${page}`
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
