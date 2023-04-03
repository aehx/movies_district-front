import { useState } from "react";
import { useSelector } from "react-redux";
import { getMovieByPage } from "../../hooks/moviePage.hook";
import PageList from "../genreComponents/movieContainer/pageManager/pageManager";
import GridSlider from "../sliderComponents/slider/gridSlider";
import TrailerPopUp from "./trailerPopUp";
import { RootState } from "../../redux/store/store";

export default function TrailerContainer() {
  const moviesToDisplay = useSelector(
    (state: RootState) => state.movies.genreToDisplay
  );
  const trailerToDisplay = useSelector(
    (state: RootState) => state.movies.trailerToDisplay
  );
  const [page, setPage] = useState(1);
  const movieByPage = getMovieByPage(moviesToDisplay ?? "", page)?.response;
  const slides = movieByPage?.movieData ?? [];
  const maxPages = movieByPage?.maxPages ?? null;

  return !trailerToDisplay ? (
    <div className="min-h-screen w-full bg-black py-10">
      <GridSlider
        slidesPerView={3}
        rows={3}
        slides={slides}
        whichGrid="trailerSlide"
      />
      <PageList
        page={page}
        changePage={(page: number) => setPage(page)}
        maxPages={maxPages}
      />
    </div>
  ) : (
    <TrailerPopUp movieId={trailerToDisplay} />
  );
}
