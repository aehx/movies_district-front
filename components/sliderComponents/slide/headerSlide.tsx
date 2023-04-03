import Image from "next/image";
import { whatGenreIsTheMovie } from "../../../utils/genre.utils";
import { textSlice } from "../../../utils/text.utils";
import ButtonLink from "../../reusableComponents/buttonLink/buttonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";

export default function HeaderSlide(props: TMDBMovieData) {
  const img_base_url = "http://www.themoviedb.org/t/p/original";
  return (
    <div className="min-h-[250px] xs:min-h-[300px] sm:min-h-[400px] md:min-h-[550px] xl:min-h-[850px] relative">
      <div className="w-3/4 h-full absolute top-0 bg-gradient-to-r from-zinc-900 to-transparent z-50"></div>
      <div className="[&>*]:mb-5 absolute top-[10%] left-[15%] max-w-xl z-50">
        <h2>{props.title}</h2>
        <div className="flex flex-col [&>*]:my-4 items-start">
          <span className="flex [&>*]:mr-3 items-center [&>*]:mx-2">
            <FontAwesomeIcon
              icon={faStar}
              className="pb-1 h-4 text-red-600 mx-2"
            />
            {props.vote_average}
            <p> year : {textSlice(props.release_date, 4)}</p>
          </span>
          <ButtonLink
            href={`/movie/${props.id}`}
            movieInfo={props}
            title="More Info"
          />
        </div>
        <div className="hidden sm:block text-md leading-7">
          {textSlice(props.overview, 200, "...")}
        </div>
        <div className="hidden sm:block [&>*]:text-lg ">
          <span className="text-red-500 mr-1">genre : </span>
          <span>{whatGenreIsTheMovie(props.genre_ids)}</span>
        </div>
      </div>
      <Image
        src={`${img_base_url}${props.backdrop_path}`}
        alt={props.title}
        fill
        priority={true}
        className={`object-cover scale-125 ${props.style} opacity-70`}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  );
}
