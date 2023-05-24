import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css"

const NavBar = () => {
return (
    <div className={style.navBar}>
        
            <NavLink to='/home' activeClassName="linkHome" style={{ textDecoration: 'none', color: 'black'  }}>HOME</NavLink>
            <NavLink to='/form' activeClassName="linkForm" style={{ textDecoration: 'none', color: 'black' }}>FORM</NavLink>
            <NavLink to='/dogs' activeClassName="linkDogs" style={{ textDecoration: 'none', color: 'black' }}>DOGS</NavLink>
        
        
    </div>
    )
}

export default NavBar;