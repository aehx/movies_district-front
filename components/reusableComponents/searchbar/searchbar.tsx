import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../../../redux/store/reducers/movies.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type link = string;

export default function Searchbar() {
  const [searchedMovie, setSearchedMovie] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const githubLink: link = "https://github.com/aehx";
  const linkedinLink: link = "https://www.linkedin.com/in/kevin-p-0b807a249/";

  return (
    <div className="flex w-screen lg:h-16 bg-zinc-800 justify-center">
      <div className="flex w-screen items-center sm:w-11/12 lg:w-2/3 sm:pl-0">
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full h-full">
          <div className="flex justify-center items-center">
        <Link href="/" className="min-h-max overflow-clip mr-5 md:mr-0">
          <img
            src="/images/LogoMovie.png"
            alt="logo"
            className="max-h-[90px] lg-max-h-[110px]"
          />
        </Link>
        <h1 className="text-xl"><span className="text-red-600">Movies</span> District</h1>
          </div>
          <div className="relative flex">
            <input
              type="text"
              className=" bg-black text-md pl-6 py-1 mr-1 sm:mr-3 outline-none"
              placeholder="Find your movie"
              value={searchedMovie}
              onChange={(e) => setSearchedMovie(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter" && searchedMovie.length > 0) {
                  dispatch(addSearchedMovies(searchedMovie));
                  router.push({
                    pathname: "/movie/search",
                    query: { name: searchedMovie },
                  });
                }
              }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="h-3 absolute inset-y-1/4 left-2"
            />
            <button
              className="text-sm bg-red-600 rounded-sm py-0.5 px-2 sm:px-3 hover:bg-red-700 transition duration-500 outline-none "
              onClick={() => {
                if (searchedMovie && searchedMovie.length > 0) {
                  dispatch(addSearchedMovies(searchedMovie));
                  router.push({
                    pathname: "/movie/search",
                    query: { name: searchedMovie },
                  });
                }
              }}
            >
              search
            </button>
          </div>
          <div className=" my-5 lg:my-0 flex justify-evenly w-[200px]  items-center lg:w-[150px] h-full [&>*]:border-[3px] [&>*:hover]:cursor-pointer [&>*:hover]:border-[3px] [&>*:hover]:border-slate-50 transition-all [&>*:hover]:duration-500">
            <Link
              href={linkedinLink}
              target="_blank"
              className="group bg-zinc-500 p-3 flex justify-center items-center border-3 border-zinc-500 rounded-full relative overflow-hidden"
            >
              <span className="block bg-red-700 w-full h-0 absolute bottom-0 left-0 rounded-full group-hover:h-full transition-all duration-500"></span>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-4 group-hover:animate-rotate z-10 group-hover:transition-all duration-500"
              />
            </Link>
            <Link
              href={githubLink}
              target="_blank"
              className="group bg-zinc-500 p-3 flex justify-center items-center border-3 border-zinc-500 rounded-full relative overflow-hidden"
            >
              <span className="block bg-red-700 w-full h-0 absolute bottom-0 left-0 rounded-full group-hover:h-full transition-all duration-500"></span>
              <FontAwesomeIcon
                icon={faGithub}
                className="h-4 group-hover:animate-rotate z-10 group-hover:transition-all duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
