import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import getMovieTrailer from "../../../../hooks/trailerHook/getMovieTrailer";
import RowSlider from "../../../sliderComponents/slider/rowSlider";
import { PropsTopTen } from "../../../../typescript/interface/props.interface";

export default function TopTenContainer(props: PropsTopTen) {
  const topTenTrailerToDisplay = useSelector(
    (state: RootState) => state.movies.topTenTrailer
  );

  const clickedMovie = topTenTrailerToDisplay && topTenTrailerToDisplay;
  const firstIdOfArrayOfMovies =
    props?.movieToDisplay && props?.movieToDisplay[0]?.id;
  const trailerId = clickedMovie ? clickedMovie : firstIdOfArrayOfMovies;
  const { loading, response } = getMovieTrailer(trailerId);

  return (
    <div className="w-11/12 sm:w-11/12 xl:w-9/12 flex flex-col mb-14">
      <div className="flex items-center mb-3">
        <span className="h-10 w-10 flex justify-center items-center">
          <img src="images/moviePic.png" alt="logo" />
        </span>
        <h3 className="mx-3 [&>*]:mx-1 ">
          Top ten <span className="text-red-600">Playlist</span>
        </h3>
      </div>
      <div className="bg-zinc-800 w-full lg:grid lg:grid-rows-1 lg:grid-cols-12 py-4 [&>*]:mx-3">
        <div className="mb-5 sm:mb-10 lg:mb-0 lg:col-start-1 lg:col-end-9 xl:col-start-1 xl:col-end-10">
          {loading ? (
            <div className="flex w-full h-full justify-center items-center">
              <h3>trailer is coming !</h3>
            </div>
          ) : response ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${response}`}
              allowFullScreen={true}
              className="h-full w-full"
              title="trailer"
            ></iframe>
          ) : (
            <div className="flex w-full h-full justify-center items-center">
              <h3>This trailer is not available</h3>
            </div>
          )}
        </div>
        <div className="lg:col-start-9 lg:col-end-13 xl:col-start-10 xl:col-end-13 lg:row-start-1 lg:row-end-2 h-full">
          <RowSlider
            nbrOfSlides={3}
            direction="vertical"
            whichSlide="topTenSlide"
            slides={props.movieToDisplay}
          />
        </div>
      </div>
    </div>
  );
}
