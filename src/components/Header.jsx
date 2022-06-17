import { NavLink  } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink 
                    className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : '' }` }
                    to="/"
                >
                    Home
                </NavLink>

                <NavLink 
                    className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : '' }` }
                    to="/listado"
                >
                    Listado
                </NavLink>

                <NavLink 
                    className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : '' }` }
                    to="/contacto"
                >
                    Contacto
                </NavLink>
            </div>
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

export default Header