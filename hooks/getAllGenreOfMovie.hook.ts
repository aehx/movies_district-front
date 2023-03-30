import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AxiosResult,
  MovieGenreAndData,
  MoviePromise,
  MovieResponse,
  HookResults,
  Url,
} from "../typescript/interface/hook/getAllGenreOfMovie";

const getAllGenreOfMovie = (): HookResults => {
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<null | MovieResponse>(null);
  const url: Url = useMemo(
    () => ({
      upcoming: "http://localhost:4000/movies/:upcoming",
      top_rated: "http://localhost:4000/movies/:top_rated",
      popular: "http://localhost:4000/movies/:popular",
      now_playing: "http://localhost:4000/movies/:now_playing",
    }),
    []
  );
  const fetchData = useCallback(async () => {
    try {
      const allMoviesPromise: MoviePromise[] = await Promise.all(
        Object.entries(url).map(async ([key, url]) => {
          const result: {
            key: string;
            axiosResults: AxiosResponse<AxiosResult>;
          } = {
            key,
            axiosResults: await axios.get(url),
          };
          return {
            movieGenre: result.key,
            movieData: result.axiosResults.data.movieData,
          };
        })
      );
      const allMovies: MovieGenreAndData[] = allMoviesPromise.map((el) => {
        return { movieGenre: el.movieGenre, movieData: el.movieData.results };
      });
      let allMoviesResponse: MovieResponse = {};
      allMovies.forEach((el) => {
        switch (el.movieGenre) {
          case "upcoming":
            allMoviesResponse.upcoming = el.movieData;
          case "top_rated":
            allMoviesResponse.top_rated = el.movieData;
            const allMoviescopy = JSON.parse(JSON.stringify(el));
            allMoviesResponse.topTenPlaylist =
              allMoviescopy.movieData.splice(10);
          case "popular":
            allMoviesResponse.popular = el.movieData;
          case "now_playing":
            allMoviesResponse.now_playing = el.movieData;
        }
      });
      setResponse(allMoviesResponse);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { response, loading, error };
};

export default getAllGenreOfMovie;
