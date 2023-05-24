import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogsOnPage, nextPage, prevPage } from "../../redux/actions";


const Paginado = () => {
    let dogsPerPage = 8;
    const dispatch = useDispatch()
    const dogsState = useSelector ((state) => state.dogs)
    const allDogsState = useSelector ((state) => state.allDogs)
    const currentPage = useSelector((state) => state.page)
    const totDogs = dogsState.length
    const firstIndex = (currentPage - 1) * dogsPerPage
    let dogsCurrentPage = [...allDogsState].splice(firstIndex, dogsPerPage) 

    console.log(dogsCurrentPage)

    useEffect(() => {
        dispatch(dogsOnPage(dogsCurrentPage))
    }, [dispatch, dogsState, allDogsState, dogsCurrentPage])
    
    const prevHandler = (currPage) => {
        if(currPage === 1) return
        return dispatch(prevPage(currPage))
    }
    const nextHandler = (currPage) => {
        if(currPage * dogsPerPage >= totDogs) return
        return dispatch(nextPage(currPage))
    }
    // const [dogs, setDogs] = useState();
    // useEffect(() => {
    //     setDogs([...allDogs]?.splice(0, dogsPerPage));
    // }, [allDogs, dogsPerPage]);

    
    
    //   useEffect(() => {
        //     dispatch(currentPage(dogs))
        //   },[nextPage])
        
    return (
        <div>
            <button onClick={() => prevHandler(currentPage)}>PREV</button>
                <h1>Pagina: {currentPage}/{Math.floor(totDogs / dogsPerPage)+ 1}</h1>
            <button onClick={() => nextHandler(currentPage)}>NEXT</button>
        </div>
    )
    
}


export default Paginado;













        // const nextHandler = (currPage) => {
        //     const totalDogs = allDogs.length;
        //     const goPage = currentPage + 1;
        //     const index = goPage * dogsPerPage;
        //     if (index > totalDogs) return;
        //     setDogs([...allDogs].splice(index, dogsPerPage));
        //     // setPage(nextPage);
        //     return dispatch(nextPage(currPage))
        //   };
        
        
        //   const prevHandler = (currPage) => {
        //     const previousPage = currentPage - 1;
        //     if (previousPage < 0) return;
        //     const index = previousPage * dogsPerPage;
        //     setDogs([...allDogs].splice(index, dogsPerPage));
        //     // setPage(prevPage);
        //     return dispatch(prevPage(currPage))
        //   }