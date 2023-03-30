import { NextPage } from "next";
import Navbar from "../../components/reusableComponents/navbar/navbar";
import Searchbar from "../../components/reusableComponents/searchbar/searchbar";
import TrailerContainer from "../../components/trailerComponents/trailerContainer";

const GenrePage: NextPage = (): JSX.Element => {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center">
      <main className="flex w-full min-h-screen flex-col items-center bg-black">
        <Searchbar />
        <Navbar />
        <TrailerContainer />
      </main>
    </div>
  );
};

export default GenrePage;
