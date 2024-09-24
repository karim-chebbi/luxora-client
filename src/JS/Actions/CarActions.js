import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, DELETE_CAR_BYID_FAIL, DELETE_CAR_BYID_LOAD, DELETE_CAR_BYID_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_CAR_BYID_FAIL, GET_CAR_BYID_LOAD, GET_CAR_BYID_SUCCESS } from "../ActionTypes/CarActionTypes";
import axios from "axios";

// get cars action
export const getCars = () => async (dispatch) => {
    dispatch({ type: GET_CARS_LOAD });
    try {
        const result = await axios.get('/api/cars/getCars')
        dispatch({ type: GET_CARS_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_CARS_FAIL, payload: error });
    }
}

// get car by id action
export const getCarById = (id) => async (dispatch) => {
  dispatch({ type: GET_CAR_BYID_LOAD });
  try {
    const result = await axios.get(`/api/cars/getCarById/${id}`);
    dispatch({ type: GET_CAR_BYID_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CAR_BYID_FAIL, payload: error });
  }
};

// delete car by id action
export const deleteCarById = ({id, navigate}) => async (dispatch) => {
  dispatch({ type: DELETE_CAR_BYID_LOAD });
  try {
    const result = await axios.delete(`/api/cars/deleteCar/${id}`);
    dispatch({ type: DELETE_CAR_BYID_SUCCESS, payload: result.data });
    navigate(-1)
  } catch (error) {
    dispatch({ type: DELETE_CAR_BYID_FAIL, payload: error });
  }
};

// add car action
export const addCar = ({newCar, navigate}) => async (dispatch) => {
  dispatch({ type: ADD_CAR_LOAD });
  try {
    const result = await axios.post("/api/cars/addCar", newCar);
    dispatch({ type: ADD_CAR_SUCCESS, payload: result.data });
    navigate('/shop')
  } catch (error) {
    dispatch({ type: ADD_CAR_FAIL, payload: error });
  }
};

// edit car action
export const editCar = ({id, newCar, navigate}) => async (dispatch) => {
  dispatch({ type: EDIT_CAR_LOAD });
  try {
    const result = await axios.put(`/api/cars/editCar/${id}`, newCar);
    dispatch({ type: EDIT_CAR_SUCCESS, payload: result.data });
    navigate('/shop')
  } catch (error) {
    dispatch({ type: EDIT_CAR_FAIL, payload: error });
  }
};