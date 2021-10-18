import React, { useState } from "react";
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
import { Rutas } from "./conpoments4/Rutas";
import SongSearch from "./compoments5/SongSearch";
import { SelectAnidados } from "./components6/SelectAnidados";
import ConctactForm from "./validaciones/ConctactForm";
import Modals from "./Modales/Modals";
import Memorizacion from "./Memorizacion/Memorizacion";
import moduleStyle from "../src/Estilos/Estilos.module.css"
import Header from "./SinContext/Header";
import Footer from "./SinContext/Footer";
import Main from "./SinContext/Main";

const initialTheme = "light";
const initialLanguage="en";
const initialAuth = null;;

const translations={
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },

};



function App() {

  const [valor, setValor] = useState(0);
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);;
  console.log(texts)

  const handleTheme=(e)=>{
    console.log(e.target.value)
    if(e.target.value ==="light"){
      setTheme("light")
    }else{
      setTheme("dark")
    }
  }

  const handleLanguage=(e)=>{
    console.log(e.target.value)
    if(e.target.value ==="es"){
      setLanguage("es");
      setTexts(translations.es)
        }else{
          setLanguage("en");
      setTexts(translations.en)
    }

  }
  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  const sumar = () => setValor(valor + 1);
  const restar = () => setValor(valor - 1)
  return (
    <div className="my-Page">
      <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguage={handleLanguage}    auth={auth}
        handleAuth={handleAuth}/>
      <Main theme={theme } texts={texts} auth={auth}/>

      <Footer theme={theme} texts={texts}/>
      <br />
      <Memorizacion />
      <h1 className={moduleStyle.success}>Agregando Rutas Crud de busqueda de canciones y almacenar en localStorage</h1>
      <SongSearch />
      <hr />
      <hr />
      <br />
      <h1 className={moduleStyle.success}>Crud Agregando Rutas</h1>
      <CrudAPI />

      <div>
        <br />
        <h1 className={moduleStyle.success}>Creacion de Modales</h1>
        <Modals />
        <br />
        <br />
        <h1 className={moduleStyle.success}>Formulario de Contacto</h1>
        <ConctactForm />
        <br />
        <h1 className={moduleStyle.success}>Usando select Añadidos</h1>
        <SelectAnidados />
        <br />
        <h1 className={moduleStyle.success}>Crud de busqueda de canciones</h1>
        <SongSearch />
        <h1>React Router</h1>
        <a
          href="https://reactrouter.com/web/guides/quick-start"
          target="_blank"
          rel="noreferrer"
        >
          Documentación
        </a>
        <hr />

        <Rutas />
      </div>
      <hr className={moduleStyle.success} />
      <CrudApp />
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <br />
      <hr />
      <h1>{valor}</h1>

      <br />

      <hr />
      <Scroll />
      <AjaxHooks />
      <hr />
      <Hooks />
      <hr />
      <Referencia />
      <hr />
      <br />
      <Formularios />
      <br />
      <br />
      <hr />
      <Estilos />
      <br />
      <hr />
      <Styled />
      <div>
        <br />
        <h1> Frameworks CSS con react</h1>
        <Boostrap />


      </div>



    </div>


  );
}

export default App;
