import React from 'react';
import { useFecht } from "../hooks/useFecht";


function Hooks() {
    let url="https://jsonplaceholder.typicode.com/users";
    let{data,isPending,error} = useFecht(url);

    return( 
<div>
<h1>hooks personalizados</h1>
<h3>{JSON.stringify(isPending)}</h3>
<h3><mark>{JSON.stringify(error)}</mark></h3>

<h3><pre style={{whiteSpace:"pre-wrap"}}>
    <code>{JSON.stringify(data)}</code></pre></h3>
</div>
    );
}


export default Hooks