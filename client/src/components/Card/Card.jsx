import style from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={style.card}>

            <div>
                <p>Name: {props.name}</p>
                <p>Temperament: {props.temperament}</p>
                <p>Weight: {props.weight}kg</p>
                </div>
            <img src={props.image} alt={props.name}/>

        </div>
    )
}

export default Card