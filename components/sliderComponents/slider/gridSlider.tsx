import "swiper/css";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper";
import GridSlide from "../slide/gridSlide";
import AllTrailerSlide from "../slide/allTrailerSlide";
import { PropsGridSlider } from "../../../typescript/interface/props.interface";
import {
  TMDBMovieById,
  TMDBMovieData,
} from "../../../typescript/interface/movie.interface";

export default function GridSlider(props: PropsGridSlider) {
  const whichSlideToReturn = (property: TMDBMovieData | TMDBMovieById) => {
    switch (props.whichGrid) {
      case "trailerSlide":
        return <AllTrailerSlide {...(property as TMDBMovieData)} />;
      case "gridSlide":
        return <GridSlide {...property} />;
    }
  };
  const movies = props.slides?.map((movie) => {
    return (
      <SwiperSlide
        key={movie.backdrop_path}
        className="hover:cursor-pointer mt-5"
      >
        {whichSlideToReturn(movie)}
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      modules={[Navigation, Pagination, Grid]}
      pagination={{
        type: "progressbar",
        clickable: true,
      }}
      navigation
      mousewheel-force-to-axis="true"
      grid={{ fill: "row", rows: 4 }}
      slidesPerView={1}
      spaceBetween={25}
      className="w-10/12 mt-3"
      breakpoints={{
        1024: {
          slidesPerView: props.slidesPerView,
          grid: { rows: props.rows },
        },
      }}
    >
      {movies}
    </Swiper>
  );
}
