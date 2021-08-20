import React, { useEffect } from 'react'
import { services } from '../helpers/Services';
import Formulario2 from './Formulario2'
import { Table2 } from './Table2';
import "../index.css";
import { Loader } from './Loader';
import { Message } from './Message';

const CrudAPI = () => {

    const [db, setDb] = React.useState(null);
    const [dataToEdit, setDataToEdit] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    let api = services();
    let url = "http://localhost:5000/autos";

    useEffect(() => {
        setLoading(true)
        services()
        .get(url).then((res) => {
            console.log(res);
            if (!res.err) {
                setDb(res)
                setError(null)
            } else {
                setDb(null)
                setError(res)
            }
            setLoading(false)
        });
    },[url]);
    const createData = (data) => {
        data.id = Date.now();

        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };
        api.post(url, options).then((res) => {
            console.log(res)
            if (!res.err) {
                setDb([...db, res])

            } else {
                setError(res)
            }
        })


    }
    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;
       
        let options = {
            body: data,
            headers: { "content-type":"application/json" }
        };
        api.put(endpoint, options).then((res) => {
            

            if (!res.err) {
                let newData = db.map((value) => (value.id === data.id ? data : value))
                setDb(newData)

            } else {
                setError(res)
            }

        })



    }
    const deleteData = (id) => {
        let isDelete = window.confirm(
            `Estas seguro de eliminar el registro con el Id'${id}'?`
        );



        if (isDelete) {
            let endpoint = `${url}/${id}`;
            console.log(endpoint)
            let options = {
                headers: { "content-type": "application/json" }
            };
            api.del(endpoint, options).then((res) => {


                if (!res.err) {
                    let newData = db.filter((value) => (value.id !== id))
                    setDb(newData)


                } else {
                    setError(res)
                }
            })

        } else { return; }


    }
    return (
        <div>
            <h2>Hello Word</h2>
            <article className="grid-1-2">
                <Formulario2
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit} />
                {loading && <Loader />}
                {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545" />}
                {db && (<Table2 data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData} />)
                }

            </article>
        </div>
    )

}

export default CrudAPI
