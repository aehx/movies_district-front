import { useState } from "react";
import { useSelector } from "react-redux";
import { getMovieByPage } from "../../../hooks/moviePage.hook";
import { RootState } from "../../../redux/store/store";
import GridSlider from "../../sliderComponents/slider/gridSlider";
import PageManager from "./pageManager/pageManager";
export default function MoviesContainer() {
  const moviesToDisplay = useSelector(
    (state: RootState) => state.movies.genreToDisplay
  );
  const [page, setPage] = useState(1);
  const movieByPage = getMovieByPage(moviesToDisplay, page)?.response;
  const movieData =
    movieByPage instanceof Object && "movieData" in movieByPage
      ? movieByPage.movieData
      : [];
  const maxPages =
    movieByPage instanceof Object && "maxPages" in movieByPage
      ? movieByPage.maxPages
      : page;
  return (
    <div className="min-h-screen w-full bg-black py-10">
      <GridSlider
        rows={3}
        slidesPerView={2}
        slides={movieData}
        whichGrid="gridSlide"
      />
      <PageManager
        page={page}
        changePage={(page: number) => setPage(page)}
        maxPages={maxPages}
      />
    </div>
  );
}
