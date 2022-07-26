//1. Importar las las librerias de React y ReactDom. 
import React from "react";
import ReactDom from "react-dom/client";
//2. Obtención del id del div. 
//2.1 Create the variable element, which references the contents of the root container
const element=document.getElementById('root'); 
//3. Tomamos el control con React de los elementos del div en cuestión.
//3.1 We indicate to React that we want to create the application in a container, 
//this is possible since we make use of REACTDOM

const root=ReactDom.createRoot(element);
// 4. Creamos el componente. 
// 4.1 We create the component remember that it must be through a function

function App(){
    return <h1>Bienvenido a Mi applicación</h1>; 
}

//5. Mostramos el componente por pantalla. 
root.render(<App/>); 

