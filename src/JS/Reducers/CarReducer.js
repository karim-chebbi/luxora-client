import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, DELETE_CAR_BYID_FAIL, DELETE_CAR_BYID_LOAD, DELETE_CAR_BYID_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_CAR_BYID_FAIL, GET_CAR_BYID_LOAD, GET_CAR_BYID_SUCCESS } from "../ActionTypes/CarActionTypes"

const initialState = {
    load: false,
    success: null,
    error: null,
    cars: [],
    car: {},
    deletedCar: {}
}

const CarReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CARS_LOAD:
            return {...state, load: true}

        case GET_CARS_SUCCESS:
            return {...state, load: false, success: true, cars: payload}

        case GET_CARS_FAIL:
            return {...state, success: null, load: false, error: payload}

        case GET_CAR_BYID_LOAD:
            return {...state, load: true}

        case GET_CAR_BYID_SUCCESS:
            return {...state, load: false, success: true, car: payload}

        case GET_CAR_BYID_FAIL:
            return {...state, success: null, load: false, error: payload}

        case DELETE_CAR_BYID_LOAD:
            return {...state, load: true}

        case DELETE_CAR_BYID_SUCCESS:
            return {...state, load: false, success: true, deletedCar: payload}

        case DELETE_CAR_BYID_FAIL:
            return {...state, success: null, load: false, error: payload}

        case ADD_CAR_LOAD:
            return {...state, load: true}

        case ADD_CAR_SUCCESS:
            return {...state, load: false, success: true}

        case ADD_CAR_FAIL:
            return {...state, success: null, load: false, error: payload}

        case EDIT_CAR_LOAD:
            return {...state, load: true}

        case EDIT_CAR_SUCCESS:
            return {...state, load: false, success: true}

        case EDIT_CAR_FAIL:
            return {...state, success: null, load: false, error: payload}
            
    
        default:
            return state
    }
}

export default CarReducer