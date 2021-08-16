import React, { div, useState, useEffect } from "react";
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import ImageListItem from '@material-ui/core/ImageListItem';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));



function AjaxHooks() {

    const [pokemon, setPokemon] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const getPokemon = async (url) => {
            let res = await fetch(url),
                json = await res.json();
         
            json.results.forEach(async (poke) => {
                let res = await fetch(poke.url),
                    json = await res.json();

                
                let pokemones = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default

                };
                setPokemon((pokemon) => [...pokemon, pokemones])
            })

        }
        getPokemon("https://pokeapi.co/api/v2/pokemon/");

    }, [])


    return (
        <div className={classes.root}>
            <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>

                    <h1>Peticiones Asincronas en componentes de clase</h1>
                </ImageListItem>
                {pokemon.length === 0 ? (<h1> Cargando.......</h1>) : (
                    pokemon.map((poke) => (
                        <ImageListItem key={poke.id}>
                            <img src={poke.avatar} alt={poke.name} />
                            <ImageListItemBar
                                title={poke.name}
                                subtitle={<span>by</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${poke.name}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>


                    ))

                )}

            </ImageList>
        </div>



    )


}



export default AjaxHooks;