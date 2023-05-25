import { useState } from "react"
import '../styles/home.css'


// eslint-disable-next-line react/prop-types
export function Home({nombre}){
  const [nombres, setNombre] = useState('');
  const [alerta , setAlert] = useState(false)

  const NombreApp = (nom) => {
    if( nom.length > 0 && nom.length <=15){
      nombre(nom)
      setAlert(false)
    }else {
      setAlert(true)
    }
    
  }
  
  return <div className="main-home">

    <section className="form-nombre">
      <h1>Ingresa nombre de usuario</h1>
      <input type="text" onChange={(e)=>{setNombre(e.target.value)}}/>
      {
        alerta ? <label style={{color:'coral'}}>De tener entre 0 y 15 caracters.</label>: null
      }
      <button onClick={()=>{NombreApp(nombres)}}>Aceptar</button>
    </section>

  </div>
}