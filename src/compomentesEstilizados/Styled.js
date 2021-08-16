import React from 'react';
import styled,{createGlobalStyle, css,keyframes,ThemeProvider} from "styled-components";


export default function Styled (){
    let mainColor ="#db7093",
    mainAphaColor="#db709380";

    const setTransitionTime =(time)=>`all ${time} ease-in-out`;
    const fedeln =keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
    `

    

    const MyH3 = styled.h3`
    padding: 2rem;
    text-align:center;
    background-color:${mainColor};
    color:${(props)=> props.color};
    color:${({color})=> color};
    color:${({color})=> color || "#32CD32"};
    Transition:${setTransitionTime("1s")};
    animation:${fedeln} 5s ease-out;

    ${(props) =>
        props.isButton &&
    css` 
    margin:auto;
    max-witdh:50%;
    border-radius:0.25rem;
    cursor:pointer;
    `}

    &:hover{
        background-color:${mainAphaColor}
    }
    `
   
    
    const Box =styled.div`
    padingg: 1rem;
    margin:1rem;
    color:${({theme})=> theme.color};
    background-color:${({theme})=> theme.bgColor};
    `
    const dark={
        color:"#DDD",
        bgColor:"#222",
    }
    const light={
        color:"#222",
        bgColor:"#DDD",
    }
    const BoxRounded= styled(Box)`
    border-radius: 1rem;
    `;
    const GlobalStyle = createGlobalStyle`
    h2{
        padding: 2rem;
        background-color:#fff;
        color:#61dafb;
        text-transform:uppercase;

    }
    
    `


    return(
        <>
<GlobalStyle>
        <h1>Styled Components</h1>
        <MyH3>Usando styled Components</MyH3>
        <MyH3 color="#61dafb">
            
            Usando styled Components</MyH3>
        <MyH3 isButton>Usando styled Components</MyH3>
        <ThemeProvider theme={light}>
            <Box>Soy una caja blanca</Box>
            <BoxRounded>Soy una caja blanca redonda</BoxRounded>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
            <Box>Soy una caja oscura</Box>
            <BoxRounded>Soy una caja oscura redonda</BoxRounded>
        </ThemeProvider>
        </GlobalStyle>
        </>
    )
}