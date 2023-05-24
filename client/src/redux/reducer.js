import { GET_DOGS, GET_DOG, DOG_DETAIL, FILTER, ORDER, ORDER_WEIGHT, SET_PAGE, DOGS_CURRENT_PAGE } from "./action-types";

const initialState = {
    dogs: [],
    allDogs: [],
    dogsDetail: [],
    temperamentos: [],
    page: 1,
    dogsCurrentPage: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload, 
                allDogs: action.payload
            }
        case GET_DOG:{
            return { 
                ...state,
                dogs: action.payload
            }
        }
        case DOG_DETAIL: {
            return {
                ...state,
                dogsDetail: action.payload
            }
        }
        case FILTER : {
            let dogsFiltered;
            if (action.payload === "All") {
                dogsFiltered = state.allDogs;
            } else {
                dogsFiltered = state.allDogs.filter(dog => dog.temperament && dog.temperament.includes(action.payload));
            }
            return {
                ...state,
                dogs: dogsFiltered, 
            }
        }

        // case FILTER : {

        // }
        
        case ORDER : {
            console.log(state.dogs)
            return {
                ...state,
                dogs: action.payload === "A - Z"
                ? [...state.dogs].sort((a, b) => a.name.localeCompare(b.name))
                : [...state.dogs].sort((a, b) => b.name.localeCompare(a.name))
                // En este código, a.name.localeCompare(b.name) devolverá un número negativo si a.name es menor que b.name,
                // un número positivo si a.name es mayor que b.name, y 0 si son iguales. 
                // Esto permitirá que sort ordene los perros alfabéticamente.
            }
        }

        case ORDER_WEIGHT : {
            return {
                ...state,
                dogs: action.payload === "Mayor"
                ? [...state.dogs].sort((a, b) => a.averageWeight - b.averageWeight)
                : [...state.dogs].sort((a, b) => b.averageWeight - a.averageWeight)
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }
        case DOGS_CURRENT_PAGE: {
            return {
                ...state,
                dogsCurrentPage: action.payload
            }
        }
        default:
            return { ...state };
    }
}

export default rootReducer;