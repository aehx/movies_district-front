import { useState } from "react";
import { useSelector } from "react-redux";
import { getMovieByPage } from "../../hooks/moviePage.hook";
import PageList from "../genreComponents/movieContainer/pageManager/pageManager";
import GridSlider from "../sliderComponents/slider/gridSlider";
import TrailerPopUp from "./trailerPopUp";
import { RootState } from "../../redux/store/store";
import { CircleLoader } from "react-spinners";

export default function TrailerContainer() {
  const moviesToDisplay = useSelector(
    (state: RootState) => state.movies.genreToDisplay
  );
  const trailerToDisplay = useSelector(
    (state: RootState) => state.movies.trailerToDisplay
  );
  const [page, setPage] = useState(1);
  const { response, loading } = getMovieByPage(moviesToDisplay ?? "", page);
  const slides = response?.movieData ?? [];
  const maxPages = response?.maxPages ?? null;
  return (
    <>
      {!trailerToDisplay && !loading && (
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
      )}
      {trailerToDisplay && !loading && (
        <TrailerPopUp movieId={trailerToDisplay} />
      )}
      {loading && (
        <div className="bg-zinc-900 w-full h-[100vh] flex justify-center pt-[30vh]">
          <div>
            <h1 className="text-3xl mb-20">
              <span className="text-red-600">Movies</span> District
            </h1>
            <div className="ml-5">
              <CircleLoader color="#b91c1c" speedMultiplier={0.5} size={150} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
