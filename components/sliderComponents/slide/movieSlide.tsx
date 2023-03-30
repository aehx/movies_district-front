import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addMovieInfoToDisplay } from "../../../redux/store/reducers/movies.reducer";
import { textSlice } from "../../../utils/text.utils";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";
import Image from "next/image"
export default function MovieSlide(props: TMDBMovieData) {
  const dispatch = useDispatch();
  const img_base_url = "https://www.themoviedb.org/t/p/w780";
  return (
    <Link
      href={`/movie/${props.id}`}
      onClick={() => dispatch(addMovieInfoToDisplay(props))}
      className="h-[35vh] relative flex justify-center overflow-hidden"
    >
      <div className="w-full h-full relative">
      <Image src={`${img_base_url}${props.backdrop_path}`} alt={props.title} priority={true} fill  className="hover:scale-110 hover:opacity-30 transition-all duration-1000 pb-3 object-cover" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
      </div>
      <div className="bg-zinc-900 h-1/2 w-[101%] absolute bottom-0 px-3 flex flex-col justify-evenly">
        <h4 className="text-red-600 font-bold text-lg">{props.title}</h4>
        <p>{textSlice(props.overview, 100, "...")}</p>
        <div className="flex [&>*]:mr-3 items-center">
          <FontAwesomeIcon icon={faStar} className="h-4 text-red-600" />
          {props.vote_average}
        </div>
      </div>
      <FontAwesomeIcon
        icon={faHeartCirclePlus}
        className="h-6 absolute top-0 right-0 m-3 text-red-600"
      />
    </Link>
  );
}
