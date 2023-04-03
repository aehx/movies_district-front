import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  TMDBMovieData,
  TMDBResponse,
} from "../../typescript/interface/movie.interface";
interface InputResult {
  movieResults: TMDBResponse;
}

const InputSearchMovie = (searchedMovie: string | null) => {
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<null | TMDBMovieData[] | []>(null);
  useEffect(() => {
    (async () => {
      try {
        if (searchedMovie) {
          const response: AxiosResponse<InputResult> = await axios.get(
            `https://movies-district-back.vercel.app/movies/inputSearch/${searchedMovie}/${1}`
          );
          const filteredMovie: TMDBMovieData[] =
            response.data.movieResults.results.filter(
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
