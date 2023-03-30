import { useSelector } from "react-redux";
import MovieInfo from "./movie/movieInfo";
import getOneMovieTrailer from "../../hooks/trailerHook/getOneMovieTrailer";
import Navbar from "../reusableComponents/navbar/navbar";
import { RootState } from "../../redux/store/store";

export default function MovieInfoContainer() {
  const movie = useSelector(
    (state: RootState) => state.movies.movieInfoToDisplay
  );
  const id = movie?.id ? movie?.id : null;
  const trailer = getOneMovieTrailer([], id)?.response;

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full pt-10 flex justify-center px-2 bg-black pb-20">
        <MovieInfo {...movie} trailerKey={trailer} />
      </div>
    </>
  );
}
