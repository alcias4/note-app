import { HiXCircle, HiExclamationCircle } from "react-icons/hi";


// eslint-disable-next-line react/prop-types
export function Informacion({infoTrue, noti}){
  
  return <>
    {
      infoTrue? <section className="noticia">
        <h2><HiExclamationCircle className="icon-info"/>Información<HiXCircle className="x-info" onClick={noti}/></h2>
        <article className="uso">
          <p> - Esta app solo funciona de manera local, por lo tanto, solo podrás ver tus notas en el navegador donde la subiste.</p>
          <p> - A la hora de eliminar el perfil se eliminarán todos tú datos.</p>
        </article>
        <strong>Gracias por tu atención!</strong>
      </section>: null
    }
  </>
}