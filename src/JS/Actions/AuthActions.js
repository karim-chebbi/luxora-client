import axios from "axios"
import { LOGIN_USER_FAIL, LOGIN_USER_LOAD, LOGIN_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_LOAD, REGISTER_USER_SUCCESS } from "../ActionTypes/AuthActionTypes"


// Register
export const register = ({newUser, navigate}) => async (dispatch) => {
        dispatch({type: REGISTER_USER_LOAD})
    try {
        let result = await axios.post('/api/auth/register', newUser) 
        dispatch({type: REGISTER_USER_SUCCESS, payload: result.data})
        navigate('/')

    } catch (error) {
        console.log(error)
        dispatch({type: REGISTER_USER_FAIL, payload: error})
    }
}

// login
export const login = ({user, navigate}) => async (dispatch) => {
    dispatch({type: LOGIN_USER_LOAD})
try {
    let result = await axios.post('/api/auth/login', user) 
    dispatch({type: LOGIN_USER_SUCCESS, payload: result.data})   
    navigate('/')   
} catch (error) {
    dispatch({type: LOGIN_USER_FAIL, payload: error})
}
}