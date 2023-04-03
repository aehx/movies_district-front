import Head from "next/head";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import getAllMovie from "../hooks/getAllMovie.hook";
import Background from "../components/indexComponents/background/background";
import Searchbar from "../components/reusableComponents/searchbar/searchbar";
import Navbar from "../components/reusableComponents/navbar/navbar";
import Header from "../components/indexComponents/header/header";
import MoviesSlidesSection from "../components/indexComponents/moviesSlidesSection/moviesSlidesSection";
import TrendingSection from "../components/indexComponents/trendingSection/trendingSection";
import Playlist_Section from "../components/indexComponents/playlist_Section/playlist_Section";
import TrailerSection from "../components/indexComponents/trailerSection/trailerSection";
import TrailerPopUp from "../components/trailerComponents/trailerPopUp";

const Home: NextPage = (): JSX.Element => {
  const trailerToDisplay = useSelector(
    (state: RootState) => state?.movies.trailerToDisplay
  );
  const allGenreOfMovie = getAllMovie()?.response;
  const top_rated = allGenreOfMovie?.top_rated;
  const topTenPlaylist = allGenreOfMovie?.topTenPlaylist;
  const popular = allGenreOfMovie?.popular;
  const now_playing = allGenreOfMovie?.now_playing;
  const upcoming = allGenreOfMovie?.upcoming;

  return (
    <div className="flex w-screen min-h-screen flex-col items-center landscape:hidden lg:landscape:block">
      <Head>
        <title>Movies district</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://www.themoviedb.org" />
        <link rel="preconnect" href="https://image.tmdb.org" />
        <meta
          name="description"
          content="Movies district, find your movies in one click"
        />
      </Head>
      <main className="flex w-full min-h-screen flex-col items-center">
        {!trailerToDisplay ? (
          <>
            <Background />
            <Searchbar />
            <Navbar />
            <Header movieToDisplay={top_rated} />
            <MoviesSlidesSection movieToDisplay={{ top_rated, upcoming }} />
            <TrendingSection
              movieToDisplay={{ top_rated, now_playing, popular }}
            />
            <Playlist_Section
              movieToDisplay={topTenPlaylist}
              suggestedToDisplay={upcoming}
            />
            <TrailerSection trailerToDisplay={now_playing} />
          </>
        ) : (
          <TrailerPopUp movieId={trailerToDisplay} />
        )}
      </main>
    </div>
  );
};

export default Home;
