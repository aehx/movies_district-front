import { NextPage } from "next";
import { useSelector } from "react-redux";
import InputSearchMovie from "../../hooks/searchHook/inputSearchMovie";
import Navbar from "../../components/reusableComponents/navbar/navbar";
import Searchbar from "../../components/reusableComponents/searchbar/searchbar";
import GridSlider from "../../components/sliderComponents/slider/gridSlider";
import { RootState } from "../../redux/store/store";
import { CircleLoader } from "react-spinners";

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
        {loading && (
          <div className="bg-zinc-900 w-full h-[100vh] flex justify-center pt-[30vh]">
            <div>
              <h1 className="text-3xl mb-20">
                <span className="text-red-600">Movies</span> District
              </h1>
              <div className="ml-5">
                <CircleLoader
                  color="#b91c1c"
                  speedMultiplier={0.5}
                  size={150}
                />
              </div>
            </div>
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
