import React from 'react';
import SelectList from './SelectList'

export const SelectAnidados = () => { 
    const [estado, setEstado]= React.useState("");
    const [municipio, setMunicipio]= React.useState("");
    const [colonia, setColonia ] = React.useState("");
    return (
        <div>
            <h1>Select anidados</h1>

            <h2>Mexico</h2>
            <SelectList title="estado" url ="" handleChange={(e)=>{setEstado(e.target.value)}}/>
            {estado &&     <SelectList title="municipio" url ="" handleChange={(e)=>{setMunicipio(e.target.value)}}/>             }
           { municipio && <SelectList title="colonia" url ="" handleChange={(e)=>{setColonia(e.target.value)}}/>}
            
            <pre>
                <code>
                    {estado}{municipio}{colonia}
                </code>
            </pre>

        </div>
    )
}
