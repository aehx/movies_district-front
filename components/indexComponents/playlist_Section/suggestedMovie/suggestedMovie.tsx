import Image from "next/image";
import { whatGenreIsTheMovie } from "../../../../utils/genre.utils";
import { setRandomMovie } from "../../../../utils/randomMovie.utils";
import { PropsSuggested } from "../../../../typescript/interface/props.interface";

export default function SuggestedMovie(props: PropsSuggested) {
  const img_base_url = "https://www.themoviedb.org/t/p/w780";
  const suggestedToDisplay = props?.suggestedToDisplay ?? [];
  const suggested = setRandomMovie(suggestedToDisplay);
  const suggestedTitle = suggested?.title ?? "movie picture";
  const genreId = suggested?.genre_ids ?? [];
  return (
    <div className="w-11/12 xl:w-9/12 lg:max-h-[50vh] bg-zinc-900 bg-[rgba(24,24,27,0.7)] flex flex-col lg:flex-row ">
      <div className="relative w-full min-h-[50vh] xl:w-2/5  lg:max-h-[60vh] mr-20">
        <Image
          src={`${img_base_url}${suggested?.backdrop_path}`}
          alt={suggestedTitle}
          loading="lazy"
          fill
          className="object-cover md:object-cover lg:h-full xl:object-center"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="w-full py-10 px-2">
        <span className="border-b-2 bg-red-500">
          <p className="text-3xl font-normal">OUR MOVIE SUGGESTION</p>
        </span>
        <h3 className="text-red-700 mx-auto">{suggested?.title}</h3>
        <span className="inline-block mb-5 font-medium text-2xl">
          {whatGenreIsTheMovie(genreId)}
          <span className="block w-full h-1 bg-red-600 mt-2"></span>
        </span>
        <p className="mb-5 w-2/3">{suggested?.overview}</p>
      </div>
    </div>
  );
}
