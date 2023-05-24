import style from "./Card.module.css"
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    
    return (
        <div className={style.card}>
            

            <img src={props.image} alt={props.name}/>            

            <div className={style.cardContainer}>
                <div className={style.cardNavlink}>
                    <NavLink to={`/detail/${props.id}`} className={style.navLink} activeClassName={style.active}>{props.name}</NavLink>
                </div>

                <div className={style.temperament}>
                    <p>{props.temperament}</p> 
                </div> 

            </div>
                <div className={style.weight}>
                    <p>{props.weight ? props.weight : props.maxWeight}kg</p>
                </div>

        </div>
    )
}

export default Card