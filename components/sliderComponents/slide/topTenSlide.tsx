import Image from "next/image";
import { useDispatch } from "react-redux";
import { addTopTenTrailer } from "../../../redux/store/reducers/movies.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";

export default function TopTenSlide(props: TMDBMovieData) {
  const dispatch = useDispatch();
  const img_base_url = "https://www.themoviedb.org/t/p/w780";
  const id = props?.id ? props.id : null;
  return (
    <div
      className="group overflow-hidden relative"
      onClick={() => dispatch(addTopTenTrailer(id))}
    >
      <div className="w-full overflow-hidden min-h-[23vh] relative">
        <Image
          src={`${img_base_url}${props.backdrop_path}`}
          alt={props.title}
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
          priority={true}
          fill
          className="aspect-video object-cover group-hover:scale-95 group-hover:opacity-30 transition-all duration-1000"
        />
      </div>
      <div className="h-1/3 w-[101%] absolute top-5  px-3 flex flex-col justify-evenly xs:bottom-0 lg:bottom-5 ">
        <h4 className="text-red-600 font-bold text-lg">{props.title}</h4>
        <div className="flex [&>*]:mr-3 items-center">
          <FontAwesomeIcon icon={faStar} className="h-4 text-red-600" />
          {props.vote_average}
        </div>
      </div>
    </div>
  );
}
