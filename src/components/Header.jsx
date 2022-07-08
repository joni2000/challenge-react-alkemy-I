import { NavLink  } from "react-router-dom"
import { Buscador } from "../components"

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
        <div className="navbar-collapse">
            <div className="navbar-nav me-5">

                <NavLink 
                    className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : '' }` }
                    to="/"
                >
                    AlkeFlix
                </NavLink>

                <NavLink 
                    className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : '' }` }
                    to="/listado"
                >
                    Listado
                </NavLink>

                <NavLink 
                    className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : '' }` }
                    to="/Favoritos"
                >
                    Favoritos
                </NavLink>
            </div>
            <Buscador />
        </div>
    </nav>

  /*       <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/listado'>Home</Link> 
                    </li>
                    <li>
                        <Link to='/listado'>Home</Link>
                    </li>
                </ul>
            </nav>
        </header> */
    )
}

