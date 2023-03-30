import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import { useState } from "react";
import HeaderSlide from "../slide/headerSlide";
import { TMDBMovieData } from "../../../typescript/interface/movie.interface";

export default function HeaderSlider(props: {
  slides: TMDBMovieData[] | undefined;
}) {
  const [test, setTest] = useState<string>("animate-growUp");
  const movies = props?.slides?.map((movie) => {
    return (
      <SwiperSlide
        className="bg-zinc-900 relative overflow-hidden group"
        key={movie?.title}
      >
        <HeaderSlide {...movie} style={test} />
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      loop={true}
      speed={800}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      mousewheel-force-to-axis="true"
      slidesPerView={1}
      className="w-screen max-h-[850px]"
      key={1}
      onSlideChangeTransitionStart={() => {
        setTest("");
      }}
      onSlideChangeTransitionEnd={() => {
        setTest("animate-growUp");
      }}
      autoplay={{ delay: 8000 }}
    >
      {movies}
    </Swiper>
  );
}
