import React from 'react';
import Formulario from './Formulario';
import Table from './Table';
import "../index.css"
const initialData= [
	{
        id:1,
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        id:2,
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
        id:3,
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        id:4,
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
        id:5,
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
        id:6,
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	

];

const CrudApp = () => {
    const[db,setDb]=React.useState(initialData);
	const[dataToEdit,setDataToEdit]= React.useState(null)

    const createData=(data)=>{
		data.id = Date.now();
		setDb([...db,data])

    }
    const updateData=(data)=>{
		let newData = db.map((value)=> (value.id ===data.id ? data : value))
		setDb(newData)
        
    }
    const deleteData=(id)=>{
		let isDelete = window.confirm(
			`Estas seguro de eliminar el registro con el Id'${id}'?`
		);

		if(isDelete){
			let newData = db.filter((value) => (value.id!==id))
			setDb(newData)

		}else{return;}

		
    }
    return (
        <div>
            <h2>Hello Word</h2>
			<article className="grid-1-2"> 
            <Formulario
			createData={createData}
			updateData={updateData}
			dataToEdit={dataToEdit}
			setDataToEdit={setDataToEdit}/>
            <Table data={db} 
			setDataToEdit={setDataToEdit} 
			deleteData={deleteData}/>

</article>
        </div>
    )
}

export default CrudApp
