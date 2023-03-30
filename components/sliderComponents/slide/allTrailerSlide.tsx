import Image from "next/image"
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addTrailerToDisplay } from "../../../redux/store/reducers/movies.reducer";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";
import { textSlice } from "../../../utils/text.utils";

export default function AllTrailerSlide(props: TMDBMovieData) {
  const dispatch = useDispatch();
  const img_base_url = "https://www.themoviedb.org/t/p/w780";
  return (
    <div className="flex flex-col w-12/12">
      <div
        className="w-11/12 h-[250px] overflow-hidden relative flex justify-center items-center group"
        onClick={() => dispatch(addTrailerToDisplay(props.id))}
      >
        <Image src={`${img_base_url}${props.backdrop_path}`} alt={props.title} loading="eager" fill className="absolute object-cover group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
        <div
          className=" border-4 border-red-600 rounded-3xl group-hover:rounded-full group z-10"
          onClick={() => {}}
        >
          <FontAwesomeIcon
            icon={faPlay}
            className="h-6 w-6 m-3 group-hover:m-4  transition-all duration-300 text-red-600"
          />
        </div>
      </div>
      <div className="ml-4 flex flex-col justify-evenly">
        <p className="text-red-600 text-2xl">{props.title}</p>
        <p className="w-2/3">{textSlice(props.overview, 100, "...")}</p>
        <div className="flex [&>*]:mr-3 items-center">
          <FontAwesomeIcon icon={faStar} className="h-4 text-red-600" />
          {props.vote_average}
        </div>
      </div>
    </div>
  );
}
