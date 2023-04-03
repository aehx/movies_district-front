import { NextPage } from "next";
import Navbar from "../../../components/reusableComponents/navbar/navbar";
import Searchbar from "../../../components/reusableComponents/searchbar/searchbar";
import MoviesContainer from "../../../components/genreComponents/movieContainer/moviesContainer";

const GenrePage: NextPage = (): JSX.Element => {
  return (
    <div className="flex w-screen min-h-screen">
      <main className="flex w-full min-h-screen flex-col items-center bg-black">
        <Searchbar />
        <Navbar />
        <MoviesContainer />
      </main>
    </div>
  );
};

export default GenrePage;
