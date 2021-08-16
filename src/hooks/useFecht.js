import { useState,useEffect } from 'react';

export const useFecht = (url) =>{

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const getData = async(url)=>{
       try{
           let res = await fetch(url);
           if(!res.ok){
               // eslint-disable-next-line no-throw-literal
               throw{
                   err:true,
                   status:res.status,
                   statusText:!res.statusText ?"Ocurrio un error": res.statusText,
               };
           }
           let data = await res.json();
           setIsPending(false)
           setData(data)
           setError({err:false})

       }catch(error){
        setIsPending(true)
        setError(error)


       }
       
    };
    getData(url);
    }, [url])



    return{data,isPending,error}



        
}


