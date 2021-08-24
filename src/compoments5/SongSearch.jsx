import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { services } from "../helpers/Services";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const SongSearch = () => {
  const classes = useStyles();

  const [search, setSearch] = React.useState(null);
  const [lyric, setLyric] = React.useState(null);
  const [bio, setBio] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
    const {artista, cancion} = search;

      let artistaUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      let cancionUrl = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      console.log(cancionUrl);
      setLoading(true);
      const [artistaRes, cancionRes] = await Promise.all([
        services().get(artistaUrl),
        services().get(cancionUrl),
      ]);
      console.log(cancionRes);
      setBio(artistaRes);
      setLyric(cancionRes);
      setLoading(false);
    };

    fetchData();
  },[search]);

  const handleSearch = (data) => {
    setSearch(data);
  };
  return (
    <div className={classes.root}>
      <h1>Busqueda de la Canción</h1>

     
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SongForm handleSearch={handleSearch} />
        </Grid>

        <Grid item xs={12}>
        {loading && <Loader />}
        {search && !loading && (
         
          <SongDetails lyric={lyric} bio={bio} search={search} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default SongSearch;
