import {HiOutlineDotsHorizontal} from "react-icons/hi";


// eslint-disable-next-line react/prop-types
export function MenuTresPuntos({vaciar, eliminar, noti, notificacin}){


  return <nav className="menuTresPuntos"  style={notificacin? {pointerEvents:'none'}: null}>
    <HiOutlineDotsHorizontal   className="icon-puntos"/> 
    <div>
      <button onClick={vaciar}> Vaciar todo</button>
      <button onClick={noti}>Más información</button>
      <button onClick={eliminar}>Eliminar Perfil</button>
    </div>
  </nav>
}