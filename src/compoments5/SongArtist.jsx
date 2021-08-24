import React from 'react'

const SongArtist = ({artista}) => {
    return (
        <section>
        <h3>{artista.strArtist}</h3>
        <img src={artista.strArtistThumb} alt={artista.strArtist} />
        <p>
          {artista.intBornYear} - {artista.intDiedYear || "Presente"}
        </p>
        <p>{artista.strCountry}</p>
        <p>
          {artista.strGenre} - {artista.strStyle}
        </p>
        <a href={`http://${artista.strWebsite}`} target="_blank" rel="noreferrer">
          Sitio Web Oficial
        </a>
        <p>{artista.strBiographyEN}</p>
      </section>
    )
}

export default SongArtist
