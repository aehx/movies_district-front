import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Navbar from "../../components/reusableComponents/navbar/navbar";
import Searchbar from "../../components/reusableComponents/searchbar/searchbar";
import GridSlider from "../../components/sliderComponents/slider/gridSlider";
import InputSearchMovie from "../../hooks/searchHook/inputSearchMovie";
import { RootState } from "../../redux/store/store";

const GenrePage: NextPage = (): JSX.Element => {
  const searchedMovie = useSelector(
    (state: RootState) => state.movies.searchedMovies
  );
  const getDataFromInputValue = InputSearchMovie(searchedMovie)?.response;
  const loading = InputSearchMovie(searchedMovie)?.loading;
  const router = useRouter();
  if (typeof window !== "undefined" && !loading) {
    if (getDataFromInputValue === null || getDataFromInputValue.length === 0) {
      router.push("/");
    }
  }
  return (
    <div className="flex w-screen min-h-screen flex-col items-center">
      <main className="flex w-full min-h-screen flex-col items-center bg-black pb-20">
        <Searchbar />
        <Navbar />
        <GridSlider
          slidesPerView={2}
          rows={3}
          slides={getDataFromInputValue}
          whichGrid="gridSlide"
        />
      </main>
    </div>
  );
};

export default GenrePage;
