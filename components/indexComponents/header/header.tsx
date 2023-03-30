import { PropsArrayOfMovieData } from "../../../typescript/interface/props.interface";
import HeaderSlider from "../../sliderComponents/slider/headerSlider";

export default function Header(props: PropsArrayOfMovieData) {
  return (
    <div className="flex justify-center items-center w-full max-h-[850px] bg-zinc-900">
      <HeaderSlider slides={props?.movieToDisplay} />
    </div>
  );
}
