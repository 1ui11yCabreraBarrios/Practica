import React,{useRef} from 'react';


export default function Referencia(){
    let refMenu = useRef(),
    refMenuBtn=useRef();

    console.log(refMenuBtn)

function handleToggleMenu(e){
    e.preventDefault();
    if(refMenuBtn.current.textContent === "Menu"){
refMenuBtn.current.textContent="Cerrar";
refMenu.current.style.display ="block";
    }else{
        refMenuBtn.current.textContent="Menu";
refMenu.current.style.display ="none";
    }

}



    return(
        <>

        <h1>Referencias</h1>

        <button ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
        <nav  ref={refMenu} style={{display:'none'}}> 
            <a href="#/">Seccion1</a>
            <br/>
            <a href="https://www.youtube.com/watch?v=jAimlsxuhaY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=21">Referencias</a>
            <br/>
            <a href="#/">Seccion3</a>
            <br/>
            <a href="#/">Seccion4</a>
            <br/>
            <a href="#/">Seccion5</a>
           
        </nav>
        </>
    )
}