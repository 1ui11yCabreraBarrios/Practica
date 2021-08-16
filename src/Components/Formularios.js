import React from 'react';


export default function Formularios() {

    const [form, setform] = React.useState({})

    const handleSave = (e) => {

        setform({
            ...form,
            [e.target.name]: e.target.value
        }
        )
    }
    const handleChecked=(e)=>{

        setform({
            ...form,
            [e.target.name]:e.target.checked
        }
        )
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("El formulario se envio");


    }



    return (

        <>
            <h1>Formularios</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleSave}
                />
                <h3>Elioge tu sabor JS favorita</h3>
                <input
                    type="radio"
                    id="javaScript"
                    name="programacion"
                    value="javaScript"
                    onChange={handleSave}
                    defaultChecked
                />
                <label htmlFor="javaScript">javaScript</label>

                <input
                    type="radio"
                    id="react"
                    name="programacion"
                    value="react"
                    onChange={handleSave}
                />
                <label htmlFor="react">React</label>
                <input
                    type="radio"
                    id="viu"
                    name="programacion"
                    value="viu"
                    onChange={handleSave}
                />
                <label htmlFor="viu">Viu</label>
                <input
                    type="radio"
                    id="svelte"
                    name="programacion"
                    value="svelte"
                    onChange={handleSave}
                />
                <label htmlFor="svelte">Svelte</label>
<br/>
                <p>Elige un lenguaje de programacion</p>
                <select 
                name="lenguaje"
                onChange={handleSave}
                defaultValue="">
                    <option value="">---</option>
                    <option value="js">javaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                    </select>
                    <br/>
                    <label htmlFor="terminos">Acepto los terminos y condiciones</label>
                    <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    onChange={handleChecked}

                    />
                    <button
                    type="submit" >Enviar</button>



            </form>
        </>
    )
}



