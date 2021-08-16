import React from 'react';
import "../Estilos/Estilos.css"
import "../Estilos/Estilos.scss"
import moduleStyle from "../Estilos/Estilos.module.css"

export default function Estilos(){

    let myStyle ={
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%",

    }


    return(
        <>
        <section className="estilos">
        <h1>Estilos de CSS</h1>
        <h2 className="bg-react">Estilo en hojas CSS externa</h2>
        <h2 className="bg-react" style={{borderRadius:".25rem" , margin:"1rem"}}>Estilo en linea(style)</h2>
        <h3 className="bg-react" style={myStyle}>Estilos en Linea </h3>
        <h3 className="bg-react" >Agregando Normalize con 
        <br/>
        <code>@import-normalize</code> </h3>
        <h3  className={moduleStyle.error}>Estilos en Linea </h3>
        <h3  className={moduleStyle.success}>Estilos en Linea </h3>
        <h3  className="bg-sass">Estilos en Linea </h3>


        </section>

        </>
    )
}