import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import "./Home.css"


const Home = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDogs())
    },[dispatch])

    //cuando se monta, que haga el dispatch
    //  useEffect()     -       useDispatch
    return (
        <div>
            <h1>Cantidades industriales de peyitos.</h1>
            <CardsContainer />
        </div>
    )
}

export default Home;