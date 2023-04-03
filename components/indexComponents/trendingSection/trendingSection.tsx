import TrendingNavbar from "./trendingNavbar/trendingNavbar";
import { useState } from "react";
import GridSlider from "../../sliderComponents/slider/gridSlider";
import { PropsWithMultipleArrayOfMovieData } from "../../../typescript/interface/props.interface";

export default function TrendingSection(
  props: PropsWithMultipleArrayOfMovieData
) {
  const [genreToDisplay, setGenreToDisplay] = useState<{
    [key: string]: string | number;
  }>({
    genre: "top_rated",
    navStyle: "top_rated",
  });

  const movies_By_Genre = Object.entries(props.movieToDisplay).filter(
    (el) => el[0] === genreToDisplay.genre
  )[0][1];

  return (
    <section className=" flex flex-col items-center w-screen min-h-screen bg-zinc-800 pb-5">
      <TrendingNavbar
        moviesToReturn={(genre, navStyle) => {
          setGenreToDisplay({ genre, navStyle });
        }}
        activeColor={genreToDisplay.navStyle}
      />
      <GridSlider
        slidesPerView={2}
        rows={3}
        slides={movies_By_Genre}
        whichGrid="gridSlide"
      />
    </section>
  );
}
