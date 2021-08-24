import React from 'react'

const SongLyrucs = ({title,lyrics}) => {
    console.log(lyrics)
    return (
        <section>
            <h1>{title}</h1>
            <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
        </section>
    )
}

export default SongLyrucs
