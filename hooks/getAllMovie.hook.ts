import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { MovieResponse } from "../typescript/interface/movie.interface";

const getAllMovie = () => {
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<null | MovieResponse>(null);

  useEffect(() => {
    (async () => {
      try {
        const allMovies: AxiosResponse<MovieResponse> = await axios.get(
          "http://localhost:4000/movies/all"
        );
        setResponse(allMovies.data);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { error, loading, response };
};

export default getAllMovie;
