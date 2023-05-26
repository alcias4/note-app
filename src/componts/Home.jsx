import { useState } from "react"
import { HiXCircle } from "react-icons/hi";
import '../styles/home.css'


// eslint-disable-next-line react/prop-types
export function Home({nombre}){
  const [nombres, setNombre] = useState('');
  const [alerta , setAlert] = useState(false)
  const [empezar, setEmpezar] = useState(false)
  const NombreApp = (nom) => {
    if( nom.length > 0 && nom.length <=15){
      nombre(nom)
      setAlert(false)
    }else {
      setAlert(true)
    }
    
  }

  const empezarFun = () =>{
    setEmpezar(!empezar)
    setAlert(false)
  }
  
  return <div className="main-home">
    
    <section className="info-landing" style={empezar? {opacity:0.4}: null} >
      <article>
        <h1>Bienvenido a Collection aplicación de tareas</h1>
        <p>Fácil de usar, solo con poner nombre de usuario y está listo para empezar . Es minimalista y elegante.</p>
        <button onClick={empezarFun}>Iniciar</button>
      </article>
    </section>
    <figure className="img-derecho"  style={empezar? {opacity:0.4}: null} >
      <img src="/img/Data and settings_Monochromatic.svg" alt="img" />
    </figure>
    <figure className="svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#414052" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,234.7C672,256,768,224,864,186.7C960,149,1056,107,1152,112C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </figure>
    {
      empezar ? <section className="form-nombre">
      <h3>Ingresa nombre de usuario</h3>
      <HiXCircle className="icon-x"  onClick={empezarFun}/>
      <input type="text" onChange={(e)=>{setNombre(e.target.value)}} placeholder="Ej: Pepito"/>
      {
        alerta ? <label style={{color:'rgb(223, 69, 69)'}}>De tener entre 0 y 15 caracters.</label>: null
      }
      <button style={alerta ? {marginTop: '0px'}:null} onClick={()=>{NombreApp(nombres)}}>Aceptar</button>
      </section> : null
    }
  </div>
}