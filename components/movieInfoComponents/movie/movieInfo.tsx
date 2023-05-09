import Image from "next/image";
import FavoriteButton from "../../reusableComponents/favoriteButton/favoriteButton";
import { whatGenreIsTheMovie } from "../../../utils/genre.utils";
import { PropsMovieInfos } from "../../../typescript/interface/props.interface";

export default function MovieInfo(props: PropsMovieInfos) {
  const img_base_url = "https://www.themoviedb.org/t/p/w780";
  const title = props?.title ?? "Movie Picture";
  const id = props?.id ?? 0;
  const overview = props?.overview ?? "";
  return (
    <div className="lg:w-2/3 h-full flex flex-col items-center lg:items-start">
      <h3 className="mb-5 lg:mb-10 text-red-600">{props.title}</h3>
      <div className="flex [&>*]:mx-2 mb-5">
        <p>
          <span className="text-red-600"> genre :</span>{" "}
          {props.genre_ids && whatGenreIsTheMovie(props.genre_ids)}
        </p>
        <p>
          <span className="text-red-600"> release date :</span>{" "}
          {props.release_date?.split("-").reverse().join("-")}
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:items-start mb-5">
        <div className="flex justify-start mb-5 lg:mb-10 relative w-4/6 aspect-video lg:w-1/5 lg:aspect-square lg:mr-10">
          <Image
            src={`${img_base_url}${props.backdrop_path}`}
            alt={title}
            loading="eager"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <FavoriteButton id={id} />
        </div>
        <p className="w-2/3 lg:w-2/5">{overview}</p>
      </div>
      <div className="w-11/12 aspect-video lg:max-w-[600px]">
        <h3 className=" text-red-600">Trailer</h3>
        {props.trailerKey ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${props.trailerKey}`}
            allowFullScreen={true}
            className="h-full w-full"
            title="trailer"
          ></iframe>
        ) : (
          <div className="flex w-full h-full justify-center items-center">
            <h3>trailer is coming !</h3>
          </div>
        )}
      </div>
    </div>
  );
}
