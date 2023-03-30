import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import getOneMovieTrailer from "../../hooks/trailerHook/getOneMovieTrailer";
import { addTrailerToDisplay } from "../../redux/store/reducers/movies.reducer";

export default function TrailerPopUp(props: { movieId: string }) {
  const trailer = getOneMovieTrailer([], Number(props.movieId));
  const dispatch = useDispatch();
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
        {trailer.response === undefined ? (
          <div className="flex w-full h-full justify-center items-center">
            <h3>No trailer available</h3>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer.response}`}
            allowFullScreen={true}
            className="h-full w-full"
          ></iframe>
        )}
      </div>
    </div>
  );
}
