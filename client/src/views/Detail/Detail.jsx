import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findDogById } from "../../redux/actions";
import styles from "./Detail.module.css"



const Detail = () => {

    const {id} = useParams()
    console.log(id);
    const dispatch = useDispatch()

    const dogsDetail = useSelector(state=> state.dogsDetail)
    useEffect(() => {
        dispatch(findDogById(id))
    }, [dispatch, id])

    return (
            <div>
                <div className={styles.title}>
                    <h2>Nombre: </h2><p>{dogsDetail.name}</p>
                </div>
                    <div className={styles.detailContainer}>
                        <div className={styles.imagenDetail}>
                            <img src={dogsDetail.image} alt={dogsDetail.name} />
                        </div>
                        <div className={styles.infoDetail}>
                            <div>
                                <h2 className={styles.id}>{dogsDetail.id}</h2>
                            </div>
                            <div>
                                <h2>Origen: </h2>{dogsDetail.origin ? dogsDetail.origin : "Desconocido"}
                            </div>
                            <div>
                                <h2>Peso promedio:</h2>{dogsDetail.averageWeight? dogsDetail.averageWeight : dogsDetail.weight}kg
                            </div>
                            <div>
                                <h2>Temperamentos: </h2>{dogsDetail.temperament}
                            </div>
                            <div>
                                <h2>Altura: </h2>{dogsDetail.minHeight}
                            </div>
                            <div>
                                <h2>Tiempo de vida: </h2>{dogsDetail.life_span}
                            </div>
                        </div>
                    </div>
            </div>
    )
}



export default Detail;