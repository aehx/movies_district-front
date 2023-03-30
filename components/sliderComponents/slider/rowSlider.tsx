import MovieSlide from "../slide/movieSlide";
import TrailerSlide from "../slide/trailerSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import TopTenSlide from "../slide/topTenSlide";
import { PropsRowSlider } from "../../../typescript/interface/props.interface";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";

export default function RowSlider(props: PropsRowSlider) {
  const whichSlideToReturn = (property?: TMDBMovieData) => {
    switch (props.whichSlide) {
      case "movieSlide":
        return {
          component: property && <MovieSlide {...property} />,
          style: "w-full max-h-[50vh]",
          navigation: true,
          slideName: "movieSlide",
        };
      case "trailerSlide":
        return {
          component: property && <TrailerSlide {...property} />,
          style: "w-full max-h-[50vh]",
          navigation: true,
          slideName: "trailerSlide",
        };
      case "topTenSlide":
        return {
          component: property && <TopTenSlide {...property} />,
          style: "w-full h-[70vh] ",
          navigation: false,
          slideName: "topTenSlide",
        };
    }
  };
  const movies = props.slides?.map((movie) => {
    return (
      <SwiperSlide key={movie.title} className={`hover:cursor-pointer`}>
        {whichSlideToReturn(movie)?.component}
      </SwiperSlide>
    );
  });
  return (
    <div>
      <Swiper
        speed={800}
        modules={[Navigation, Pagination,Mousewheel]}
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        direction={props.direction}
        navigation={whichSlideToReturn()?.navigation}
        mousewheel={true}
        mousewheel-force-to-axis="true"
        slidesPerView={
          whichSlideToReturn()?.slideName === "topTenSlide" ? 3 : 1
        }
        spaceBetween={25}
        className={`${whichSlideToReturn()?.style}`}
        breakpoints={{
          700: {
            slidesPerView: 3,
          },
          1024: { slidesPerView: whichSlideToReturn()?.slideName === "trailerSlide" ? 4: props.nbrOfSlides },
          1200: { slidesPerView: props.nbrOfSlides },
        }}
      >
        {movies}
      </Swiper>
    </div>
  );
}
