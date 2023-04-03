import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import MovieInfo from "./movie/movieInfo";
import Navbar from "../reusableComponents/navbar/navbar";
import getMovieTrailer from "../../hooks/trailerHook/getMovieTrailer";
import { redirectIfCondition } from "../../hooks/userHook/checkIfUserConnected";
import { PropsMovieInfos } from "../../typescript/interface/props.interface";

export default function MovieInfoContainer() {
  const movie = useSelector(
    (state: RootState) => state.movies.movieInfoToDisplay
  );
  const condition = !movie;
  redirectIfCondition(condition, "/");
  const id = movie?.id ?? null;
  const trailer = id ? getMovieTrailer(id)?.response : null;
  const movieInfo = movie && { ...movie, trailerKey: trailer };
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full pt-10 flex justify-center px-2 bg-black pb-20">
        <MovieInfo {...(movieInfo as PropsMovieInfos)} />
      </div>
    </>
  );
}
