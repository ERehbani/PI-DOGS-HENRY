import axios from "axios"
import { GET_DOG, GET_DOGS, DOG_DETAIL } from "./action-types";



export const getDogs = () => {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:3001/dogs');

        dispatch({type: GET_DOGS, payload: data })
    };
};

export const getDog = (name) => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/dogs/${name}`)
        const dog = apiData.data;
        dispatch({ type:GET_DOG, payload: dog})
    }
}

export const findDogById = (id) => {
    const endpoint = 'http://localhost:3001/dogs';

    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/${id}`);
            if (!data) {
                throw new Error(`No dog was found with this id: ${id}`);
            }
            console.log(data);
            return dispatch({
                type: DOG_DETAIL,
                payload: data,
            });

        } catch (error) {

            alert(error.message);
        }
    };
};