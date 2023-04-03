import HeaderSlider from "../../sliderComponents/slider/headerSlider";
import { PropsArrayOfMovieData } from "../../../typescript/interface/props.interface";

export default function Header(props: PropsArrayOfMovieData) {
  const moviesToDisplay = props?.movieToDisplay ?? [];
  return (
    <div className="flex justify-center items-center w-full xxs:min-h-[250px] xs:min-h-[550px] lg:min-h-[550px] xl:min-h-[850px] bg-zinc-900">
      <HeaderSlider slides={moviesToDisplay} />
    </div>
  );
}
