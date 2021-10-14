import { Loader } from "../components3/Loader";
import { useFecht } from "../hooks/useFecht"
import Message  from "../compoments5/Message";

const SelectList = ({title,url,handleChange}) => {
    const { data, error, loading}= useFecht(url);
console.log(data,error,loading)

if(!data) return null; 
if(error){
    <Message
    msg={`Error ${error.status}:${error.statusText}`}
    bgColor="#dc3545"
    />
}

    let id=`select-${title}`
    let label = title.charAt(0).toUpperCase() + title.slice(1);
    let options =data.response[title];
    console.log(options)
    

    return (
        <>
        <label htmlFor={id}>{label}</label>
        {loading && <Loader/>}
            <select name={id} id={id} onChange={handleChange}> 
                <option value="">Elige una Opcion {title}</option>
                {data && options.map((val) => <option value={val} key={val}>{val}</option>)}
            </select>
        </>
    )
}

export default SelectList

