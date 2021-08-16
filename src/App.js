import React,{useState} from "react";
import Hooks from "./Components/HooksPersonalizado";
import AjaxHooks from "./Components/PokemonPeticiones";
import Formularios from "./Components/Formularios";
import Referencia from "./ReferenciaDOM/Referencia";
import Scroll from "./Components/ScrollHooks";
import Estilos from "./Components/Estilos";
import Styled from "./compomentesEstilizados/Styled";
import Boostrap from "./Boostrap/BoostrapReact";
import CrudApp from "./components2/CrudApp";
import CrudAPI from "./components3/CrudAPI";



function App() {

  const [ valor, setValor ] = useState(0)

  const sumar = ()=> setValor(valor +1);
  const restar = ()=> setValor(valor -1)
  return (
    <div className="App">
     <h1>hello world</h1>
     <nav>
       <button onClick={sumar}>+</button>
       <button onClick={restar}>-</button>
     </nav>
     <br/>

     <h1>{valor}</h1>
   
     <br/>
 
     
     <Scroll/>
    <AjaxHooks/>
    <hr/>
    <Hooks/>
    <hr/>
    <Referencia/>
    <hr/>
    <Formularios/>
    <br/>
    <Estilos/>
    <br/>
    <Styled/>
    <div>
      <h1> Frameworks CSS con react</h1>
      <Boostrap/>

      
</div>
<CrudApp/>
<CrudAPI/>

    </div>

   
  );
}

export default App;
