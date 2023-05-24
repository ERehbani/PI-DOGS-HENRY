import { useDispatch, useSelector } from "react-redux";
import { filterDogs, getDogs, setPage, getDog } from "../../redux/actions";

const Filters = () => {
    const temperamentSearch = useSelector(state => state.dogs)
    // const temperamentSearch = []
    const dispatch = useDispatch()

    // Crear un array con todos los temperamentos únicos
    let allTemperaments = []
    temperamentSearch.forEach(dog => {
        if (dog.temperament) { // Asegurarse de que dog.temperament está definido
            let temperaments = dog.temperament.split(', ')
            temperaments.forEach(temp => {
                if (!allTemperaments.includes(temp)) {
                    allTemperaments.push(temp)
                }
            })
        }
    })
    console.log(temperamentSearch)
    
    const handlerFilter = event => {
        // if(event.target.value === "All") dispatch(getDogs(temperamentSearch))
        dispatch(filterDogs(event.target.value))
        dispatch(setPage(1))
    }

    return (
        <>
            <select className='select' name='temperament'  defaultValue='' onChange={handlerFilter}>
                <option value=''>Seleccione uno</option>
                {allTemperaments.map((temp, index) => (
                    <option value={temp} key={index}>{temp}</option>
                ))}
            </select>
        </>
    )
}

export default Filters
