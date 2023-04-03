import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfos } from "../../../redux/store/reducers/user.reducer";
import NavbarLink from "../buttonLink/navbarLink";
import { RootState } from "../../../redux/store/store";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user.userInfos);
  const dispatch = useDispatch();
  const token = user && "accessToken" in user;
  return (
    <div className="flex w-screen h-16 bg-zinc-800 justify-center border-t border-zinc-600 sticky top-0 z-50">
      <div className="flex w-full justify-center items-center p-2 sm:justify-start md:w-2/3">
        <ul className="relative flex [&>*]:mx-5 text-lg">
          <NavbarLink href="/" text="Home" />|
          {!token ? (
            <NavbarLink href="/auth/login" text="Connection" />
          ) : (
            <>
              <button
                className="hover:text-red-600 cursor-pointer  transition-all hover:duration-500"
                onClick={async () => {
                  await axios.post(
                    "https://movies-district-back.vercel.app/auth/logout",
                    { token: user.accessToken },
                    {
                      headers: { "authorization": "Bearer " + user.accessToken },
                    }
                  );
                  dispatch(addUserInfos(null));
                }}
              >
                logout
              </button>
              |
              <NavbarLink href="/private/watchlist" text="My movies" />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
