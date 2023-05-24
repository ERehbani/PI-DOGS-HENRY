import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import "./Home.css"
import SearchBar from "../SearchBar/Searchbar.jsx"
import Filters from "../Filters/Filters";
import Order from "../Order/Order";
import Paginado from "../Paginado/Paginado";

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

            <SearchBar/>
            <Filters/>  <Order/>
            <CardsContainer />
            <Paginado />
            {/* <Wrapper currentPage={0} items={Card} nextHandler={nextHandler} prevHandler={prevHandler}/> */}
        </div>
    )
}

export default Home;