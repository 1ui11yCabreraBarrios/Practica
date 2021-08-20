import React from 'react'

const TableRow2 = ({setDataToEdit,deleteData,value}) => {
 
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
    <button onClick={() => deleteData(id)} style={{margin:"1rem"}}>Eliminar</button></td>
    </tr>
    
                
           
        
    )
}

export default TableRow2
