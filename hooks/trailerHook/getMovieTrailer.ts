import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

const getMovieTrailer = (id: number | null) => {
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<string | null>(null);
  interface MovieTrailer {
    trailer: string;
  }
  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const response: AxiosResponse<MovieTrailer> = await axios.get(
            `http://localhost:4000/movies/trailer/${id}`
          );
          setResponse(response.data.trailer);
        }
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  return { response, error, loading };
};

export default getMovieTrailer;
