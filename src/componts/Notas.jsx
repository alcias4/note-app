import { useState } from "react";
import { HiTrash, HiCheck } from "react-icons/hi";
// eslint-disable-next-line react/prop-types
export function Notas({notas, elimiarNota, noti, tareaHecha}){
  const [cambio, setCambio] = useState(false)
  
  const styelBtn = (i)=>{
    tareaHecha(i)
    setCambio(!cambio)
  }
  return<section className="contenido-notas">
  {
    // eslint-disable-next-line react/prop-types
    notas.map((e, i)=>{
      return <div key={i} className="notas" style={noti?{opacity:0.5}: null}>
        <article>
          <h3>{e.titulo}</h3>
          <span className="contenido">{e.contenido}</span>
        </article>
        <section className="btn-notas">
          <label className="etiqueta">#{e.descripcion}</label>
          <div>
            <button className={e.hecho? 'activeNota': null} onClick={()=>{styelBtn(i)}}>
              <HiCheck className={e.hecho? 'activeNota-icon':'iconCheck'}/>
              <label style={e.hecho? {display: 'none'}: null}>Hecho</label> 
            </button>
            <button onClick={()=>{elimiarNota(e.id)}}>
              <HiTrash className="icon-eliminar"/>
              <label className="btn-eliminar">Eliminar</label>
            </button>
          </div>
        </section>
        
      </div>
    })
  }
</section>
}