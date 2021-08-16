import React, { useState, useEffect } from 'react';

function Reloj({ hora }) {
    return (
        <h1>{hora}</h1>
    )
}


function Scroll() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false)

    

    useEffect(() => {
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => { setHora(new Date().toLocaleTimeString()) }, 1000)
        } else {
            clearInterval(temporizador)
        }



        return () => {
            console.log("fase de desmontaje")
            clearInterval(temporizador)
        }
    }, [visible])
    return (
        <>

            <h1>Reloj con hooks</h1>
            {visible && <Reloj hora={hora} />}
            <button onClick={() => setVisible(false)}>Pausar</button>
            <button onClick={() => setVisible(true)}>Iniciar</button>


        </>
    );
}


export default Scroll