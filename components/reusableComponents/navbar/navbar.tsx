import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfos } from "../../../redux/store/reducers/user.reducer";
import { RootState } from "../../../redux/store/store";
import NavbarLink from "../buttonLink/navbarLink";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user.userInfos);
  const dispatch = useDispatch();
  const token = user && "accessToken" in user;
  return (
    <div className="flex w-screen h-16 bg-zinc-800 justify-center border-t border-zinc-600 sticky top-0 z-50">
      <div className="flex w-full justify-center items-center p-2 sm:justify-start md:w-2/3">
        <ul className="relative flex [&>*]:mx-5 text-lg">
          <NavbarLink href="/" text="Home" />|
          <NavbarLink href="/" text="Contact" />|
          {!token ? (
            <NavbarLink href="/auth/login" text="Connection" />
          ) : (
            <>
              <button
                className="hover:text-red-600 cursor-pointer  transition-all hover:duration-500"
                onClick={() => {
                  axios.post("http://localhost:4000/users/logout", {
                    token: user.refreshToken,
                  });
                  dispatch(addUserInfos(null));
                }}
              >
                logout
              </button>
              |
              <NavbarLink href="/" text="My movies" />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
