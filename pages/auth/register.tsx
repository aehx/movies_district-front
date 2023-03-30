import Link from "next/link";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Background from "../../components/indexComponents/background/background";
import Navbar from "../../components/reusableComponents/navbar/navbar";
import formHandler from "../../hooks/formHook/SignupHook";
import { redirectIfUserConnected } from "../../hooks/userHook/checkIfUserConnected";
import { RootState } from "../../redux/store/store";

export default function Register() {
  const userInStore = useSelector((state: RootState) => state.user.userInfos);
  const userNameInput = useRef<HTMLInputElement | null>(null);
  const userEmailInput = useRef<HTMLInputElement | null>(null);
  const userPasswordInput = useRef<HTMLInputElement | null>(null);
  const user = userInStore && "accessToken" in userInStore ? userInStore : null;
  redirectIfUserConnected(user);
  const handleSubmit = formHandler(
    userNameInput,
    userEmailInput,
    userPasswordInput
  );
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen absolute top-0 bg-[#000000cc] flex flex-col items-center justify-center">
        <Background />
        <form
          className="w-[500px] aspect-square rounded-md bg-zinc-800 flex flex-col items-center justify-between pb-10"
          onSubmit={handleSubmit.handleSubmit}
        >
          <div className="flex items-center w-full h-[50px] pl-10 pt-10 relative">
            <img
              src="/images/LogoMovie.png"
              alt="logo"
              className="max-h-[100px] mr-10"
            />
            <p className="absolute left-1/3 top-10 text-2xl">
              <span className="text-red-600">Movies</span> District
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <input
              type="text"
              placeholder="username"
              className="mb-3 w-5/12 rounded-md text-zinc-200 p-1 pl-2 outline-none bg-zinc-500 placeholder-zinc-900"
              ref={userNameInput}
            />
            <input
              type="text"
              placeholder="Email"
              className="mb-3 w-5/12 rounded-md text-zinc-200 p-1 pl-2 outline-none bg-zinc-500 placeholder-zinc-900"
              ref={userEmailInput}
            />
            <input
              type="password"
              placeholder="password"
              className="w-5/12 rounded-md text-zinc-200 p-1 pl-2 outline-none bg-zinc-500 placeholder-zinc-900"
              ref={userPasswordInput}
            />
          </div>
          <div className="flex flex-col w-full items-center">
            <button type="submit" className="bg-red-600 w-1/5 mb-3">
              Submit
            </button>
            <p>
              Already have an account ?{" "}
              <Link
                href="/auth/login"
                className="hover:text-red-600 transition-all duration-300"
              >
                Come Here !
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
