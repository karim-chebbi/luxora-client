import { GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS } from "../ActionTypes/CarActionTypes"

const initialState = {
    load: false,
    success: null,
    error: null,
    cars: []
}

const CarReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CARS_LOAD:
            return {...state, load: true}

        case GET_CARS_SUCCESS:
            return {...state, load: false, success: true, cars: payload}

        case GET_CARS_FAIL:
            return {...state, success: null, load: false, error: payload}
            
    
        default:
            return state
    }
}

export default CarReducer