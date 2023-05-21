import { GET_DOGS, GET_DOG, DOG_DETAIL } from "./action-types";

const initialState = {
    dogs: [],
    allDogs: [],
    dogsDetail: [],
    temperamentos: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return { ...state, dogs: action.payload, allDogs: action.payload }
        case GET_DOG:{
            return { ...state, dogs: action.payload }
        }
        case DOG_DETAIL: {
            return {
                ...state,
                dogsDetail: action.payload
            }
        }
        default:
            return { ...state };
    }
}

export default rootReducer;