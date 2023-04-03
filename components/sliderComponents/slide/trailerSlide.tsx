import Image from "next/image";
import { useDispatch } from "react-redux";
import { addTrailerToDisplay } from "../../../redux/store/reducers/movies.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";

export default function TrailerSlide(props: TMDBMovieData) {
  const dispatch = useDispatch();
  const img_base_url = "https://www.themoviedb.org/t/p/w780";
  const id = props?.id ? props.id : null;
  return (
    <div className="h-[200px] flex justify-center">
      <div
        onClick={() => dispatch(addTrailerToDisplay(id))}
        className="absolute top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center"
      >
        <Image
          src={`${img_base_url}${props.backdrop_path}`}
          alt={props.title}
          priority={true}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="absolute top-0 h-full w-full object-cover hover:scale-110 hover:opacity-30 transition-all duration-1000"
        />
        <div className=" border-4 border-red-600 rounded-full group z-10">
          <FontAwesomeIcon
            icon={faPlay}
            className="h-6 w-6 m-3 group-hover:m-4 transition-all duration-300 text-red-600"
          />
        </div>
      </div>
      <div className="flex flex-col [&>*]:mr-3 items-start absolute bottom-0 left-0 ml-2">
        <h4 className="text-red-600 font-bold text-xl">{props.title}</h4>
        <span className="flex text-lg items-center">
          <FontAwesomeIcon icon={faStar} className="h-4 text-red-600" />
          {props.vote_average}
        </span>
      </div>
    </div>
  );
}
