import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css"




const Landing = () => {
    return (
        <div className={styles.landing}>
            <div className={styles.landingContainer}>
                <h1 className={styles.title}>Projeto solo sobre cachorritas :P</h1>
                <NavLink to="/home" activeClassName="active"><button className={styles.button}>ENTRAR</button></NavLink>
            </div>
        </div>
    )
}

export default Landing;