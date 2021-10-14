import React from 'react';
import SelectList from './SelectList'

export const SelectAnidados = () => {
    const [estado, setEstado] = React.useState("");
    const [municipio, setMunicipio] = React.useState("");
    const [colonia, setColonia] = React.useState("");
    const TOKEN ="6a47492d-26fe-4c82-96b3-02ddd0fe92ba";
    return (
        <div>
            <h1>Select anidados</h1>

            <h2>Mexico</h2>
            <SelectList title="estado" url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} handleChange={(e) => { setEstado(e.target.value) }} />
            {estado && <SelectList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${estado}?token=${TOKEN}`} handleChange={(e) => { setMunicipio(e.target.value) }} />}
            {municipio && <SelectList title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${municipio}?token=${TOKEN}`} handleChange={(e) => { setColonia(e.target.value) }} />}

            <pre>
                <code>
                    {estado}-{municipio}-{colonia}
                </code>
            </pre>

        </div>
    )
}
