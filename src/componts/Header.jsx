import { HiCollection, HiPlus} from "react-icons/hi";

// eslint-disable-next-line react/prop-types
export function Header({active}){
  const nombre = window.localStorage.getItem('user');

  const onclickHindel = () =>{
    active();
  }
  return <header>
      <nav className="nav-derecho">
        <HiCollection className="icon-collecion" />
        <h2>Coleccion</h2>
      </nav>

      <nav className="nav-izquierdo">
        <button onClick={onclickHindel} className="btn-plus">
          <HiPlus className="icon-plus"/>
        </button>
        <label>
          {
            nombre
          }
        </label>
        <img src="/img/user.svg" />
      </nav>
  </header>
}