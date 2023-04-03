import { useRef } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { formHandler } from "../../hooks/formHook/loginHook";
import { redirectIfCondition } from "../../hooks/userHook/checkIfUserConnected";
import Background from "../../components/indexComponents/background/background";
import Navbar from "../../components/reusableComponents/navbar/navbar";
import { RootState } from "../../redux/store/store";

export default function Login() {
  const userInStore = useSelector((state: RootState) => state.user.userInfos);
  const userEmailInput = useRef<HTMLInputElement | null>(null);
  const userPasswordInput = useRef<HTMLInputElement | null>(null);
  const condition = (userInStore && "accessToken" in userInStore) ?? false;
  redirectIfCondition(condition, "/");

  const { handleLogin, error } = formHandler(userEmailInput, userPasswordInput);
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen absolute top-0 bg-[#000000cc] flex flex-col items-center justify-center">
        <Background />
        <form
          className="w-[95vw] xs:w-[500px] aspect-square rounded-md bg-zinc-800 flex flex-col items-center justify-between pb-10"
          onSubmit={handleLogin}
        >
          <div className="flex items-center justify-start xs:justify-center w-full pl-10 xs:pl-0 pt-5">
            <div className="relative h-[70px] xs:h-[100px] w-[70px] xs:w-[100px] mr-5">
              <Image fill src="/images/LogoMovie.png" alt="logo" loading="lazy" sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
            </div>
            <p className="text-2xl">
              <span className="text-red-600">Movies</span> District
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <input
              type="email"
              placeholder="email"
              className="mb-3 w-5/12 rounded-md text-zinc-200 p-1 pl-2 outline-none bg-zinc-500 placeholder-zinc-900"
              ref={userEmailInput}
            />
            <input
              type="password"
              placeholder="password"
              className="w-5/12 rounded-md text-zinc-200 p-1 pl-2 outline-none bg-zinc-500 placeholder-zinc-900"
              ref={userPasswordInput}
            />
            {error && <p className="mt-5">{error.error}</p>}
          </div>
          <div className="flex flex-col w-full items-center">
            <button type="submit" className="bg-red-600 w-1/5 mb-3">
              Connection
            </button>
            <p>
              Don't have an account ?{" "}
              <Link
                href="/auth/register"
                className="text-red-600 transition-all duration-300"
              >
                Click Here !
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
