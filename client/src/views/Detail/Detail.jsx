import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findDogById } from "../../redux/actions";



const Detail = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const dogsDetail = useSelector(state=> state.dogsDetail)

    useEffect(() => {
        dispatch(findDogById(id))
    }, [dispatch, id])

    return (
        <div>
            <img src={dogsDetail.image} alt="" />
            <h2>Nombre: {dogsDetail.name}</h2>
            <h2>Origen: {dogsDetail.origin}</h2>
            <h2>Temperamentos: {dogsDetail.temperaments}</h2>
        </div>
    )
}



export default Detail;