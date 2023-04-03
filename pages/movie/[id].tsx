import { NextPage } from "next";
import Searchbar from "../../components/reusableComponents/searchbar/searchbar";
import MovieInfoContainer from "../../components/movieInfoComponents/MovieInfoContainer";

const MovieInfo: NextPage = (): JSX.Element => {
  return (
    <div className="flex w-screen flex-col items-center">
      <main className="flex w-full min-h-screen xl:min-h-screen flex-col items-center">
        <Searchbar />
        <MovieInfoContainer />
      </main>
    </div>
  );
};

export default MovieInfo;
