import { useRef } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { redirectIfCondition } from "../../hooks/userHook/checkIfUserConnected";
import Background from "../../components/indexComponents/background/background";
import Navbar from "../../components/reusableComponents/navbar/navbar";
import formHandler from "../../hooks/formHook/SignupHook";
import { RootState } from "../../redux/store/store";

export default function Register() {
  const userInStore = useSelector((state: RootState) => state.user.userInfos);
  const userNameInput = useRef<HTMLInputElement | null>(null);
  const userEmailInput = useRef<HTMLInputElement | null>(null);
  const userPasswordInput = useRef<HTMLInputElement | null>(null);
  const condition = (userInStore && "accessToken" in userInStore) ?? false;
  redirectIfCondition(condition, "/");
  const { handleSubmit, error } = formHandler(
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
          className="w-[95vw] xs:w-[500px] aspect-square rounded-md bg-zinc-800 flex flex-col items-center justify-between pb-10"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center xs:justify-center w-full pt-5">
            <div className="relative h-[70px] xs:h-[100px] w-[70px] xs:w-[100px] mr-5">
            <Image fill src="/images/LogoMovie.png" alt="logo" loading="lazy" sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
            </div>
            <p className="text-2xl">
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
            {error && <p className="mt-5">{error.error}</p>}
          </div>
          <div className="flex flex-col w-full items-center">
            <button type="submit" className="bg-red-600 w-1/5 mb-3">
              Subscribe
            </button>
            <p>
              Already have an account ?{" "}
              <Link
                href="/auth/login"
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
