import React from 'react'

const TableRow = ({value,setDataToEdit,deleteData}) => {

    let {marca,modelo,color,transmision,precio,puertas,year,id}= value
    return (
      
               <tr>

<td>{marca}</td>
<td>{modelo}</td>
<td>{color}</td>
<td>{transmision}</td>
<td>{precio}</td>
<td>{puertas}</td>
<td>{year}</td>

<td><button onClick={() => setDataToEdit(value)}>Editar</button>
<button onClick={() => deleteData(id)}>Eliminar</button></td>
</tr>

            
       
    )
}

export default TableRow
