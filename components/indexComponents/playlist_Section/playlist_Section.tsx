import TopTenContainer from "./topTenContainer/topTenContainer";
import SuggestedMovie from "./suggestedMovie/suggestedMovie";
import { PropsPlaylist } from "../../../typescript/interface/props.interface";

export default function Playlist_Section(props: PropsPlaylist) {
  return (
    <div className="w-screen min-h-screen bg-[#000000cc] flex flex-col items-center py-10 lg:py-20">
      <TopTenContainer
        movieToDisplay={props.movieToDisplay}
        trailerToDisplay={props.trailerToDisplay}
      />
      <SuggestedMovie suggestedToDisplay={props.suggestedToDisplay} />
    </div>
  );
}
