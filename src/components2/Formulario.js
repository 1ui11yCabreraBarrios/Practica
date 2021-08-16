import React from 'react';

const initialForm={
    marca:"",
    modelo:"",
    transmision:"",
    precio:"",
    puertas:"",
    color:"",
    year:"",
    id:null,



};


const Formulario = ({createData,updateData,dataToEdit,setDataToEdit}) => {
    const[form,setForm]=React.useState(initialForm)

React.useEffect(()=>{
    if(dataToEdit){
        setForm(dataToEdit);
    }else{
        setForm(initialForm)
    }

},[dataToEdit]);

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })

    }
    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);

    }
    const handleSubmit=(e)=>{
     e.preventDefault();
     if(!form.marca || !form.modelo){
         alert("Datos Incompletos")
         return;
     }else if(!form.transmision || !form.precio){
         alert("Datos Incompletos")
         return;
     }else if(!form.puertas || !form.color || !form.year){
         alert("Datos Incompletos")
         return;
     }

     if(form.id ===null){
         createData(form);
         
     }else{
         updateData(form);

     }

     handleReset();
     

    };

    return (
        <div>
            <h3>{dataToEdit ? "Editar" :"Guardar"}</h3>
            <form onSubmit={handleSubmit}>
                
                <input type="text" name="marca" placeholder="Marca"
                value={form.marca}
                onChange={handleChange}/>
                <input type="text" name="modelo" placeholder="Modelo"
                value={form.modelo}
                onChange={handleChange}/>
                <input type="text" name="color" placeholder="Color"
                value={form.color}
                onChange={handleChange}/>
                <input type="text" name="transmision" placeholder="Transmision"
                value={form.transmision}
                onChange={handleChange}/>
                <input type="number" name="precio" placeholder="Precio"
                value={form.precio}
                onChange={handleChange}/>
                <input type="number" name="puertas" placeholder="Puertas"
                value={form.puertas}
                onChange={handleChange}/>
                <input type="number" name="year" placeholder="Año"
                value={form.year}
                onChange={handleChange}/>
                <button type="submit">Guardar</button>
                <button type="reset" value="reset" onClick={handleReset}>Limpiar</button>
            </form>
        </div>
    )
}

export default Formulario
