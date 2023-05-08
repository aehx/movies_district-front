import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import GridSlider from "../../sliderComponents/slider/gridSlider";
import { getMovieByPage } from "../../../hooks/moviePage.hook";
import { redirectIfCondition } from "../../../hooks/userHook/checkIfUserConnected";
import PageManager from "./pageManager/pageManager";
import { CircleLoader } from "react-spinners";

export default function MoviesContainer() {
  const moviesToDisplay = useSelector(
    (state: RootState) => state.movies.genreToDisplay
  );
  const condition = !moviesToDisplay;
  redirectIfCondition(condition, "/");
  const [page, setPage] = useState(1);
  const { response, loading } = getMovieByPage(moviesToDisplay ?? "", page);
  const movieData =
    response instanceof Object && "movieData" in response
      ? response.movieData
      : [];
  const maxPages =
    response instanceof Object && "maxPages" in response
      ? response.maxPages
      : page;
  return (
    <div className="min-h-screen w-full bg-black">
      {loading ? (
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
      ) : (
        <div className="py-10">
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
      )}
    </div>
  );
}
