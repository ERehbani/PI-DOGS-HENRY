import axios from "axios"
import { GET_DOG, GET_DOGS, DOG_DETAIL, FILTER, ORDER, ORDER_WEIGHT, SET_PAGE, DOGS_CURRENT_PAGE } from "./action-types";



export const getDogs = () => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get('http://localhost:3001/dogs');
            dispatch({ type: GET_DOGS, payload: data });
        } catch (error) {
        // Manejar el error aquí
        console.log(error);
        }
    };
};


export const getDog = (name) => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        const dog = apiData.data;
        console.log(dog);
        dispatch({ type:GET_DOG, payload: dog})
    }
}

export const findDogById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/dogs/${id}`);
            if (!data) {
                throw new Error(`No dog was found with this id: ${id}`);
            }
        dispatch({
            type: DOG_DETAIL,
            payload: data,
        });
    } catch (error) {
        alert(error.message);
    }
    };
};


export const filterDogs = (temperament) => {
    return {
        type: FILTER,
        payload: temperament
    }
}

export const orderDogs = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const orderWeight = (order) => {
    return {
        type: ORDER_WEIGHT,
        payload: order
    }
}
    
export const nextPage = (page) => {
    return (disptach) => {
        disptach({
            type: SET_PAGE,
            payload: page + 1
        })
    }
}

export const prevPage = (page) => {
    return (dispatch) => {
        dispatch ({
            type: SET_PAGE,
            payload: page - 1
        })
    }
}

export const setPage = (page) => {
    return (dispatch) => {
        dispatch ({
            type: SET_PAGE,
            payload: page
        })
    }
}

export const dogsOnPage = (dogsCurrentPage) => {
    return (dispatch) => {
        dispatch({
            type: DOGS_CURRENT_PAGE,
            payload: dogsCurrentPage
        })
    }
}