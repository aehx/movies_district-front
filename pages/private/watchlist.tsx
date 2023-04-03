import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Navbar from "../../components/reusableComponents/navbar/navbar";
import Searchbar from "../../components/reusableComponents/searchbar/searchbar";
import GridSlider from "../../components/sliderComponents/slider/gridSlider";
import getMoviesFromUserWatchlist from "../../hooks/userHook/getMoviesFromUserWatchlist";
import { RootState } from "../../redux/store/store";

const Watchlist: NextPage = (): JSX.Element => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.userInfos);
  const watchList = user?.movieInWatchList;
  const { loading, response, error } = getMoviesFromUserWatchlist(watchList);
  error && router.push("/auth/login");
  return (
    <div className="flex w-screen min-h-screen flex-col items-center">
      <main className="flex w-full min-h-screen flex-col items-center bg-black pb-20">
        <Searchbar />
        <Navbar />
        {loading ? (
          <div className="flex items-center justify-center w-full min-h-[50vh]">
            Your movies are coming
          </div>
        ) : response.length === 0 ? (
          <div className="flex items-center justify-center w-full min-h-[50vh]">
            You don't have movies
          </div>
        ) : (
          response.length > 0 &&
          !loading && (
            <GridSlider
              slidesPerView={2}
              rows={3}
              slides={response}
              whichGrid="gridSlide"
            />
          )
        )}
      </main>
    </div>
  );
};

export default Watchlist;
