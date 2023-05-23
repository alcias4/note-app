import { useState } from "react"
import '../styles/home.css'


// eslint-disable-next-line react/prop-types
export function Home({nombre}){
  const [nombres, setNombre] = useState('');


  const NombreApp = (nom) => {
    nombre(nom)
  }
  
  return <div>
    <h1>Bienvenido para continuar ingres tu nombre y apellido</h1>
    <input type="text" onChange={(e)=>{setNombre(e.target.value)}}/>
    <button onClick={()=>{NombreApp(nombres)}}>Aceptar</button>
  </div>
}