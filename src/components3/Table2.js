import React from 'react'
import TableRow2 from './TableRow2'

export const Table2 = ({ data, setDataToEdit, deleteData }) => {

    console.log(data)
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>

                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Color</th>
                        <th>Transmision</th>
                        <th>Precio</th>
                        <th>puertas</th>
                        <th>Año</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (data.map((value,) => (<TableRow2 key={value.id} value={value} 
                     setDataToEdit={setDataToEdit} deleteData={deleteData} />))):(<tr><td colSpan="8">No hay Datos</td></tr>) 
                    }

                </tbody>
            </table>
        </div>
    )
}
