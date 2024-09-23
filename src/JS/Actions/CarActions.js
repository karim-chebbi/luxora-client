import { GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS } from "../ActionTypes/CarActionTypes";
import axios from "axios";

export const getCars = () => async (dispatch) => {
    dispatch({ type: GET_CARS_LOAD });
    try {
        const result = await axios.get('/api/cars/getCars')
        dispatch({ type: GET_CARS_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_CARS_FAIL, payload: error });
    }
}