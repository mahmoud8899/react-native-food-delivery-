import * as ActionTypes from "./Types"
import axios from "axios"
import Url from "../Url"
import AsyncStorage from '@react-native-async-storage/async-storage'




export const AddRemoveUser = () => (dispatch) => {

    const xs = Number(2)
    AsyncStorage.removeItem(ActionTypes.KEYTOKEN)
    dispatch({
        type: ActionTypes.ADD_USER_EMPTY,
        payload: xs
    })
}




export const AddTokenAddUser = (data) => (dispatch) => {
    return dispatch({ type: ActionTypes.ADD_USER_SUCCESS, payload: data })
}


// user Login .... 
export const UserLoginAction = (user) => async (dispatch) => {


    try {
        dispatch({ type: ActionTypes.ADD_USER_LOADING })

        const { data } = await axios.post(`${Url}api/user/login/`, user)
        dispatch({ type: ActionTypes.ADD_USER_SUCCESS, payload: data })
        // console.log('ActionTypes', data)
        AsyncStorage.setItem(ActionTypes.KEYTOKEN, JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}




// user sing Up....
export const UserSingUpAction = (user) => async (dispatch) => {


    try {
        dispatch({ type: ActionTypes.ADD_USER_LOADING })

        const { data } = await axios.post(`${Url}api/user/create/`, user)
        dispatch({ type: ActionTypes.ADD_USER_SUCCESS, payload: data })
        // console.log('ActionTypes', data)
        AsyncStorage.setItem(ActionTypes.KEYTOKEN, JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}