import type { NextPage } from "next";
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import Head from "next/head";
import Background from "../components/indexComponents/background/background";
import Searchbar from "../components/reusableComponents/searchbar/searchbar";
import Navbar from "../components/reusableComponents/navbar/navbar";
import Header from "../components/indexComponents/header/header";
import MoviesSlidesSection from "../components/indexComponents/moviesSlidesSection/moviesSlidesSection";
import TrendingSection from "../components/indexComponents/trendingSection/trendingSection";
import Playlist_Section from "../components/indexComponents/playlist_Section/playlist_Section";
import TrailerSection from "../components/indexComponents/trailerSection/trailerSection";
import TrailerPopUp from "../components/trailerComponents/trailerPopUp";
import getOneMovieTrailer from "../hooks/trailerHook/getOneMovieTrailer";
import getAllGenreOfMovie from "../hooks/getAllGenreOfMovie.hook";

const Home: NextPage = (): JSX.Element => {
  const topTenTrailerToDisplay = useSelector<RootState>(
    (state) => state.movies.topTenTrailer
  );
  const trailerToDisplay = useSelector<RootState>(
    (state) => state?.movies.trailerToDisplay
  );
  const allGenreOfMovie = getAllGenreOfMovie()?.response;
  const top_rated = allGenreOfMovie?.top_rated;
  const topTenPlaylist = allGenreOfMovie?.topTenPlaylist;
  const popular = allGenreOfMovie?.popular;
  const now_playing = allGenreOfMovie?.now_playing;
  const upcoming = allGenreOfMovie?.upcoming;
  const topTenTrailer = getOneMovieTrailer(
    topTenPlaylist || [],
    typeof topTenTrailerToDisplay === "number" ? topTenTrailerToDisplay : null
  )?.response;
  return (
    <div className="flex w-screen min-h-screen flex-col items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
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
              trailerToDisplay={topTenTrailer}
              suggestedToDisplay={upcoming}
            />
            <TrailerSection trailerToDisplay={now_playing} />
          </>
        ) : (
          <TrailerPopUp movieId={`${trailerToDisplay}`} />
        )}
      </main>
    </div>
  );
};

export default Home;
