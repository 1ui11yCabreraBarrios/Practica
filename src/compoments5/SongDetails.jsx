import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SongArtist from './SongArtist'
import SongLyrucs from './SongLyrucs'
import Message from './Message';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
  }));
const SongDetails = ({search,lyric,bio}) => {
    
    const classes = useStyles();
    if (!lyric || !bio) return null;
    return (
        <div className={classes.root}>
            <h1>Detalles</h1>
            <Grid container spacing={3}>
      
        <Grid item xs={12}sm={6}>
        {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción "${search.cancion}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyrucs title={search.cancion} lyrics={lyric.lyrics} />
      )}

      
        </Grid>
        <Grid item xs={12}sm={6}>

            {bio.artists ? ( <SongArtist artista={bio.artists[0]}/> ):(   <Message
              msg={`Error: no existe el intérprete '${search.artista}'`}
              bgColor="#dc3545"/> )}
         


        </Grid>
      
      </Grid>

           
         
        </div>
    )
}

export default SongDetails
