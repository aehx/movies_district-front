import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfos } from "../../../redux/store/reducers/user.reducer";
import {
  faHeartCirclePlus,
  faHeartCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RootState } from "../../../redux/store/store";
import { useState } from "react";
// import { setTimeout } from "timers/promises";

export default function FavoriteButton({ id }: { id: number }) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userInfos);
  const [error, setError] = useState<boolean>(false);
  const movieInWatchlist: number[] | undefined = user?.movieInWatchList;
  const heart =
    Array.isArray(movieInWatchlist) && movieInWatchlist.includes(id)
      ? { color: "text-white", icon: faHeartCircleMinus }
      : { color: "text-red-600", icon: faHeartCirclePlus };

  const updatedWatchList = async () => {
    if (user) {
      const response = await axios.put(
        "https://movies-district-back.vercel.app/users/updateWatchlist",
        { username: user?.username, movieId: id },
        { headers: { authorization: "Bearer " + user?.accessToken } }
      );
      dispatch(addUserInfos({ ...user, movieInWatchList: response?.data }));
    } else {
      setError(true);
    }
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }

  return (
    <>
      <FontAwesomeIcon
        icon={heart.icon}
        className={`h-6 absolute top-0 right-0 m-3 ${heart.color} cursor-pointer`}
        onClick={updatedWatchList}
      />
      {error && (
        <div className="z-40 absolute top-16 w-full flex justify-center">
          <span className="rounded-md bg-zinc-800 px-5 py-1">
            <p>Signin for add some movies to your watchlist</p>
          </span>
        </div>
      )}
    </>
  );
}
