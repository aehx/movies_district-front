import { useDispatch } from "react-redux";
import { addTrailerToDisplay } from "../../redux/store/reducers/movies.reducer";
import getMovieTrailer from "../../hooks/trailerHook/getMovieTrailer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function TrailerPopUp(props: { movieId: number | null }) {
  const dispatch = useDispatch();
  const { loading, response } = getMovieTrailer(props?.movieId);
  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen bg-black z-50 flex justify-center items-center"
      onClick={() => dispatch(addTrailerToDisplay(null))}
    >
      <div className="w-2/3 h-[60vh] flex flex-col items-center first:items-end">
        <span
          onClick={() => dispatch(addTrailerToDisplay(null))}
          className="hover:cursor-pointer hover:text-red-600 flex items-center [&>*]:mx-2 text-lg"
        >
          Close <FontAwesomeIcon icon={faTimes} className="h-4" />
        </span>
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
            <h3>No trailer available</h3>
          </div>
        )}
      </div>
    </div>
  );
}
