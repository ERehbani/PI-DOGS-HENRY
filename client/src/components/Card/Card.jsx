import style from "./Card.module.css"
import { NavLink } from 'react-router-dom'

const Card = (props, id) => {
    
    return (
        <div className={style.card}>
            

            <img src={props.image} alt={props.name}/>            

            <div className={style.cardInformation}>
            <NavLink to={`/detail/${id}`}>{props.name}</NavLink>
                <p>{props.temperament}</p>
                <p>Weight: {props.weight}kg</p>
            </div>

        </div>
    )
}

export default Card