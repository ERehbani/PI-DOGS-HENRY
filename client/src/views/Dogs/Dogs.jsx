import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDog } from '../../redux/actions';



const Dogs = () => {

    const { name } = useParams()
    const dispatch = useDispatch()

    const dogSearch = useSelector(state => state.allDogs)

    useEffect(() => {
        dispatch(getDog(name))
    },[dispatch, name])

    return (
        <div>
            <h1>Ruta de Dogos</h1>
            <img src={dogSearch.image} alt="" />
            <h2>{dogSearch.name}</h2>
            <h2>{dogSearch.origin}</h2>
        </div>

    )
}


export default Dogs;