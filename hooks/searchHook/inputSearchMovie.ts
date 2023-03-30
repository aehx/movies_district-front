import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  TMDBMovieData,
  TMDBResponse,
} from "../../typescript/interface/movie.interface";

interface InputResult {
  movieResults: TMDBResponse;
}

interface HookResults {
  response: null | TMDBMovieData[] | [];
  error: null | AxiosError;
  loading: boolean;
}
const InputSearchMovie = (searchedMovie: string | null): HookResults => {
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<null | TMDBMovieData[] | []>(null);
  useEffect(() => {
    (async () => {
      try {
        if (searchedMovie) {
          const res: AxiosResponse<InputResult> = await axios.get(
            `http://localhost:4000/movies/inputSearch/${searchedMovie}/${1}`
          );
          const filteredMovie: TMDBMovieData[] =
            res.data.movieResults.results.filter(
              (el) => el.backdrop_path !== null
            );
          setResponse(filteredMovie);
        }
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchedMovie]);
  return { response, error, loading };
};

export default InputSearchMovie;
