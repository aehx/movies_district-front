import SlidesContainer from "./slidesContainer/SlidesContainer";
import { PropsWithMultipleArrayOfMovieData } from "../../../typescript/interface/props.interface";

export default function moviesSlidesSection(
  props: PropsWithMultipleArrayOfMovieData
) {
  return (
    <section className="flex flex-col w-full bg-black border-t-4 border-t-red-700 min-h-screen [&>*]:min-h-[50vh] py-5 sm:py-10">
      <div className="flex justify-center items-center w-full">
        <SlidesContainer
          categoryTitle="Top rated"
          categoryToFetch="top_rated"
          movieToDisplay={props.movieToDisplay?.top_rated}
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <SlidesContainer
          categoryTitle="Upcoming"
          categoryToFetch="upcoming"
          movieToDisplay={props.movieToDisplay?.upcoming}
        />
      </div>
    </section>
  );
}
