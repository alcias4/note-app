import {  useState } from 'react';
import { idNotasNueva } from '../logic/id';
import '../styles/nuevaNota.css'
import { HiXCircle } from "react-icons/hi";



// eslint-disable-next-line react/prop-types
export function NuevaNota({cerrar, datos}){
  const [titulo, setTitulo] = useState();
  const [contenido , setContenido]= useState();
  const [descripcion, setDescripcion] = useState();
  const {len} = idNotasNueva()
  const clickAdd = ()=>{
    const info = {
      id: len,
      titulo: titulo,
      contenido: contenido,
      descripcion: descripcion
    }
    cerrar()
    datos(info)
  }

  

  return <section className="nueva-nota">
    <h1 className='titulo-form'>Agregar Nota</h1>
    <HiXCircle onClick={cerrar} className='icon-form-x'/>
    <section>
      <input type="text" placeholder='Titulo' onChange={(e)=> setTitulo(e.target.value)}/>
      <textarea placeholder='Contenido' onChange={(e)=>setContenido(e.target.value) }></textarea>
      <input type="text" placeholder='Descripción' onChange={(e)=>setDescripcion(e.target.value) }/>
    </section>
    <button onClick={clickAdd}>Agregar</button>
  </section>
}