import ButtonLink from "../../reusableComponents/buttonLink/buttonLink";
import RowSlider from "../../sliderComponents/slider/rowSlider";
import { PropsArrayOfMovieData } from "../../../typescript/interface/props.interface";

export default function TrailerSection(props: PropsArrayOfMovieData) {
  return (
    <div className="w-full  bg-black pb-20 pt-14">
      <div className="flex justify-between p-6">
        <div className="flex items-center">
          <span className="h-10 w-10 flex justify-center items-center">
            <img src="images/moviePic.png" alt="logo" />
          </span>
          <h3 className="[&>*]:mx-1 mx-3">
            Trailer <span className="text-red-600">Movies</span>
          </h3>
        </div>
        <ButtonLink
          href={`/trailer/now_playing`}
          title={"View All"}
          genre={`now_playing`}
        />
      </div>
      <div
        className="w-screen h-[40px] z-50 bg-[url('/images/cinema.png')] bg-repeat-x bg-cover invert opacity-70 mb-3"
        style={{ backgroundSize: "40px" }}
      ></div>
      <RowSlider
        nbrOfSlides={5}
        whichSlide="trailerSlide"
        slides={props.trailerToDisplay}
        direction="horizontal"
      />
      <div
        className="w-screen h-[40px] z-50 bg-[url('/images/cinema.png')] bg-repeat-x bg-cover rotate-180 invert opacity-70 mt-3"
        style={{ backgroundSize: "40px" }}
      ></div>
    </div>
  );
}
