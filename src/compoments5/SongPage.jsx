import { useParams } from "react-router";
import SongDetails from "./SongDetails";

const SongPage = ({ mySongs }) => {
  let { id } = useParams();
 


  let currentSong = mySongs;
  console.log(currentSong)
  const { search, lyric, bio, } = currentSong[id];
  return <SongDetails search={search} lyric={lyric} bio={bio} />;
};

export default SongPage;