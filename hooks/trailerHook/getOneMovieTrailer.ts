import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  TMDBMovieData,
  TMDBVideoResponse,
} from "../../typescript/interface/movie.interface";

interface HookResults {
  response: string;
  error: null | AxiosError;
  loading: boolean;
}

interface VideoDataResult {
  video: TMDBVideoResponse;
}

const getOneMovieTrailer = (
  arrayOfMovie: [] | TMDBMovieData[],
  id: number | null
): HookResults => {
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        if (id && id !== null) {
          const movieId = await id;
          const res: AxiosResponse<VideoDataResult> = await axios.get(
            `http://localhost:4000/movies/trailer/${movieId}`
          );
          setResponse(res.data?.video?.results[0]?.key);
        } else {
          if (arrayOfMovie && arrayOfMovie.length > 0) {
            const arrays = await arrayOfMovie;
            const id = await arrays[0]?.id;
            const res: AxiosResponse<VideoDataResult> = await axios.get(
              `http://localhost:4000/movies/trailer/${id}`
            );
            setResponse(res.data?.video?.results[0]?.key);
          }
        }
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [arrayOfMovie, id]);
  return { response, error, loading };
};

export default getOneMovieTrailer;
