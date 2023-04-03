import Image from "next/image";
import ButtonLink from "../../reusableComponents/buttonLink/buttonLink";
import FavoriteButton from "../../reusableComponents/favoriteButton/favoriteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { whatGenreIsTheMovie } from "../../../utils/genre.utils";
import { textSlice } from "../../../utils/text.utils";
import {
  TMDBMovieById,
  TMDBMovieData,
} from "../../../typescript/interface/movie.interface";

export default function GridSlide(props: TMDBMovieData | TMDBMovieById) {
  const genres =
    "genre_ids" in props
      ? whatGenreIsTheMovie(props.genre_ids)
      : "genres" in props
      ? props.genres[0].name
      : "Not provided";
  const img_base_url = "https://www.themoviedb.org/t/p/w780";
  return (
    <div className="flex flex-col w-12/12 min-h-[25vh] sm:flex-row xl:min-h-[35vh]">
      <div className="w-full min-h-[25vh] sm:w-4/12 mb-3 sm:mb-0 relative">
        <Image
          src={`${img_base_url}${props.backdrop_path}`}
          alt={props.title}
          loading="lazy"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <FavoriteButton id={props.id} />
      </div>
      <div className="flex flex-col justify-evenly sm:pl-6 sm:w-8/12">
        <p className="text-red-600 text-2xl">{props.title}</p>
        <p className="sm:w-2/3">
          {textSlice(props.overview ?? "", 100, "...")}
        </p>
        <div className="[&>*]:text-lg">
          <span className="text-red-500 mr-1">genre : </span>
          <span>{genres}</span>
        </div>
        <div className="flex [&>*]:mr-3 items-center">
          <FontAwesomeIcon icon={faStar} className="h-4 text-red-600" />
          {props.vote_average}
          <p className="ml-4"> year : {textSlice(props.release_date, 4)}</p>
        </div>
        <div>
          <div className="w-2/5 lg:w-4/6 xl:w-3/6 mt-5">
            <ButtonLink
              href={`/movie/${props.id}`}
              movieInfo={props}
              title="More Info"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
