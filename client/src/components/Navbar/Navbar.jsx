import { Link } from "react-router-dom";
import style from "./Navbar.module.css"

const NavBar = () => {
return (
    <div className={style.navBar}>
        <Link to="/">HOME</Link>
        <Link to="/form">FORM</Link>
        <Link to="/dogs">DOGS</Link>
    </div>
    )
}

export default NavBar;