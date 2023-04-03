import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../../redux/store/store";
import { TMDBMovieById } from "../../typescript/interface/movie.interface";

const getMoviesFromUserWatchlist = (movieIds: number[] | undefined) => {
  const user = useSelector((state: RootState) => state.user.userInfos);
  const [response, setResponse] = useState<[] | TMDBMovieById[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<{ watchList: TMDBMovieById[] } | null> =
          await axios.post(
            "https://movies-district-back.vercel.app/users/getUserMovies",
            { movieIds },
            { headers: { "authorization": "Bearer " + user?.accessToken } }
          );
        const userWatchList = response?.data?.watchList ?? [];
        setResponse(userWatchList);
      } catch (e: any) {
        setError(e.response.data);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieIds]);
  return { response, error, loading };
};

export default getMoviesFromUserWatchlist;
