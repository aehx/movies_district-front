import { NextPage } from "next";
import { useSelector } from "react-redux";
import InputSearchMovie from "../../hooks/searchHook/inputSearchMovie";
import Navbar from "../../components/reusableComponents/navbar/navbar";
import Searchbar from "../../components/reusableComponents/searchbar/searchbar";
import GridSlider from "../../components/sliderComponents/slider/gridSlider";
import { RootState } from "../../redux/store/store";

const GenrePage: NextPage = (): JSX.Element => {
  const searchedMovie = useSelector(
    (state: RootState) => state.movies.searchedMovies
  );
  const { response, loading } = InputSearchMovie(searchedMovie);
  const emptyResult =
    typeof window !== "undefined" && !loading
      ? response === null || response.length === 0
      : false;

  return (
    <div className="flex w-screen min-h-screen flex-col items-center">
      <main className="flex w-full min-h-screen flex-col items-center bg-black pb-20">
        <Searchbar />
        <Navbar />
        {emptyResult && (
          <div className="w-screen h-[80vh] flex justify-center items-center text-xl">
            No movies found
          </div>
        )}
        <GridSlider
          slidesPerView={2}
          rows={3}
          slides={response}
          whichGrid="gridSlide"
        />
      </main>
    </div>
  );
};

export default GenrePage;
