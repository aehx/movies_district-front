import ButtonLink from "../../../reusableComponents/buttonLink/buttonLink";
import RowSlider from "../../../sliderComponents/slider/rowSlider";
import { TMDBMovieData } from "../../../../typescript/interface/movie.interface";

interface PropsLatest {
  categoryTitle: string;
  categoryToFetch: string;
  movieToDisplay: TMDBMovieData[] | undefined | [];
}

export default function SlidesContainer(props: PropsLatest) {
  const movieList = (categoryToFetch: string) => {
    switch (categoryToFetch) {
      case "top_rated":
        return (
          <RowSlider
            slides={props.movieToDisplay}
            nbrOfSlides={4}
            whichSlide="movieSlide"
            direction="horizontal"
          />
        );
      default:
        return (
          <RowSlider
            slides={props.movieToDisplay}
            nbrOfSlides={3}
            whichSlide="movieSlide"
            direction="horizontal"
          />
        );
    }
  };
  return (
    <div className="w-10/12 ">
      <div className="flex justify-between [&>*]:mb-6">
        <div className="flex items-center">
          <span className="h-10 w-10 flex justify-center items-center">
            <img src="images/moviePic.png" alt="logo" />
          </span>
          <h3 className="[&>*]:mx-1 mx-3">
            {props.categoryTitle} <span className="text-red-600">Movies</span>
          </h3>
        </div>
        <ButtonLink
          href={`/movie/genre/${props.categoryTitle}`}
          title={"View All"}
          genre={`${props.categoryToFetch}`}
        />
      </div>
      {movieList(props.categoryToFetch)}
    </div>
  );
}
