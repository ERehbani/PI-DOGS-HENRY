import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css"



const CardsContainer = () => {
    const dogs = useSelector(state=>state.dogs)
    
    return (
        <div className={style.cardsContainer}>
            {dogs.map(dog => {
                return <Card
                key={dog.id}
                id={dog.id}
                name={dog.name}
                temperament={dog.temperament}
                weight={dog.weight.metric}
                image={dog.image.url}
                />
            })}
        </div>
    )
}

export default CardsContainer;