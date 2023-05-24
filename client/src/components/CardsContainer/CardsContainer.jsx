import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useEffect } from "react";



// const CardsContainer = () => {
//     const dogs = useSelector(state => state.dogs)
    
//     return (
//         <div className={style.cardsContainer}>
//             {dogs.map(dog => {
//                 return <Card
//                 key={dog.id}
//                 id={dog.id}
//                 name={dog.name}
//                 temperament={dog.temperament}
//                 averageWeight={dog.averageWeight}
//                 image={dog.image.url}
//                 />
//             })}
//         </div>
//     )
// }


const CardsContainer = () => {
    // const dogs = useSelector(state => state.dogs)
    const dogsPage = useSelector(state => state.dogsCurrentPage)
    // const dogsPage = useSelector(state => state.dogs)


    return (
        <div className={style.cardsContainer}>
            {dogsPage.map(dog => {
                // Verifica que dog.temperament está definido antes de intentar llamar a split
                let firstTemperament = '';
                if (dog.temperament) {
                    const temperaments = dog.temperament.split(', ');
                    firstTemperament = temperaments[0];
                }
                        return <Card
                            key={dog.id}
                            id={dog.id}
                            name={dog.name}
                            temperament={firstTemperament}
                            weight={dog.averageWeight ? dog.averageWeight : "5 - 14"}
                            image={dog.image}
                        />
                })}
            
        </div>
    )
}
                
                // if (dog.weight) {
                //     let weightMin = parseInt(dog.weight.metric.slice(0, 2).trim());
                //     let weightMax = parseInt(dog.weight.metric.slice(4).trim());
                //     let averageWeight = weightMax + weightMin;
                //     if (weightMin && weightMax) {
                //         averageWeight = averageWeight / 2;

                //     } else if (weightMin && !weightMax) {
                //             weightMax = weightMin;
                //             averageWeight = averageWeight / 2;
                
                //         } else if (!weightMin && weightMax) {
                //             weightMin = weightMax;
                //             averageWeight = averageWeight / 2;
                //         } else {
                //         if (dog.name === "Smooth Fox Terrier") {
                //             weightMin = 6;
                //             weightMax = 9;
                //             averageWeight = ((weightMax) + (weightMin)) / 2;
                //         } else {
                //             weightMin = 20;
                //             weightMax = 30;
                //             averageWeight = ((weightMax) + (weightMin)) / 2;
                //         }}




export default CardsContainer;