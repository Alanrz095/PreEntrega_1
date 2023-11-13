import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

//4) Creamos un componente
// function App(){
//   return 
// }

//5) Mostrar el componente en la pantalla del usuario
root.render(<App/>);
