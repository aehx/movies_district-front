import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  addGenreToDisplay,
  addMovieInfoToDisplay,
} from "../../../redux/store/reducers/movies.reducer";
import { PropsButtonLink } from "../../../typescript/interface/props.interface";

export default function ButtonLink(props: Partial<PropsButtonLink>) {
  const genre = props.genre ? props.genre : "";
  const dispatch = useDispatch();
  return (
    <Link
      href={`${props.href}`}
      className="flex justify-center items-center text-lg bg-red-600 rounded-sm px-2 sm:px-4 lg:px-6 hover:bg-red-700 transition duration-500"
      onClick={() => {
        props.movieInfo
          ? dispatch(addMovieInfoToDisplay(props.movieInfo))
          : dispatch(addGenreToDisplay(genre));
      }}
    >
      {props.title}{" "}
    </Link>
  );
}
