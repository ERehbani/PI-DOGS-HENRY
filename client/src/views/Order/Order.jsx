import { useDispatch } from "react-redux"
import { orderDogs, orderWeight } from "../../redux/actions"


const Order = () => {
    const dispatch = useDispatch()

    const handleOrder = event => {
        dispatch(orderDogs(event.target.value))
    }
    const handleOrderWeight = event => {
        dispatch(orderWeight(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A - Z">A - Z</option>
                <option value="Z - A">Z - A</option>
            </select>
            <select onChange={handleOrderWeight}>
                <option value=''>Seleccione uno</option>
                <option value="Menor">Peso mayor</option>
                <option value="Mayor">Peso menor</option>
            </select>
        </div>
    )
}



export default Order