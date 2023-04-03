import { PropsTrendingNavbar } from "../../../../typescript/interface/props.interface";

export default function TrendingNavbar(props: PropsTrendingNavbar) {
  const MovieToDIsplay = (genre: string, navStyle: string | number) => {
    props.moviesToReturn(genre, navStyle);
  };
  const styleForLiElement = (
    activeColor: number | string
  ): { [key: string]: string } | undefined => {
    if (activeColor === 1 || activeColor === "top_rated") {
      return { Top_Rated_Style: "bg-red-700 animate-progressFluid" };
    }
    if (activeColor === 2)
      return { popular_Style: "bg-red-700 animate-progressFluid" };
    if (activeColor === 3)
      return { now_Style: "bg-red-700 animate-progressFluid" };
  };
  return (
    <div className="flex flex-col items-center w-screen pt-10 [&>*]:w-10/12 shadow-md shadow-zinc-900">
      <div className="flex items-center">
        <span className="h-10 w-10 flex justify-center items-center mr-3">
          <img src="images/moviePic.png" alt="logo" />
        </span>
        <h3>
          Trending <span className="text-red-600">Movies</span>
        </h3>
      </div>
      <div className="flex mt-3">
        <ul className=" [&>*]:mx-[3px] sm:[&>*]:mx-3 sm:text-lg font-medium [&>*]:flex sm:[&>*]:text-xl">
          <li
            className="flex flex-col hover:cursor-pointer"
            onClick={() => {
              MovieToDIsplay("top_rated", 1);
            }}
          >
            JUST AIRED
            <span
              className={` ${
                styleForLiElement(props.activeColor)?.Top_Rated_Style
              }  transition-all duration-500 mt-2 h-[2px]`}
            ></span>
          </li>
          <li
            className="flex flex-col hover:cursor-pointer"
            onClick={() => MovieToDIsplay("popular", 2)}
          >
            POPULAR MOVIES
            <span
              className={` ${
                styleForLiElement(props.activeColor)?.popular_Style
              }  transition-all duration-500 mt-2 h-[2px]`}
            ></span>
          </li>
          <li
            className="flex flex-col hover:cursor-pointer"
            onClick={() => MovieToDIsplay("now_playing", 3)}
          >
            MOMENT MOVIES
            <span
              className={` ${
                styleForLiElement(props.activeColor)?.now_Style
              }  transition-all duration-500 mt-2 h-[2px]`}
            ></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
