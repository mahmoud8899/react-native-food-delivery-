import * as ActionTypes from "./Types"

import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Url from "../Url"



//remove like item   
export const RemoveItemAction = (id) => (dispatch,getState) => {

    dispatch({ type: ActionTypes.REMOVE_ITEM_STORY, payload: id })
    AsyncStorage.setItem(ActionTypes.STORY_LINE_ITEM, JSON.stringify([...getState().linke.addData]))
}




export const ViewsAllLike = () => async (dispatch) => {

    // console.log('hrllo')

    try {
        const value = await AsyncStorage.getItem(ActionTypes.STORY_LINE_ITEM);
        if (value !== null) {
            // console.log(JSON.parse(value))

            //const data = 

            dispatch({ type: ActionTypes.ADD_DATA, payload: JSON.parse(value) })
        }
    } catch (error) {
        // Error retrieving data
    }
}






// add cart item to line after that save in asyncStorage... 
// get http://localhost:8000/api//product/product/6169b305499f910a5c06de52
export const AddLineCartAction = (user) => async (dispatch, getState) => {

    try {
        const { data } = await axios.get(`${Url}api/product/product/${user._id}`)
        const { _id, name, image, prics, rating, countInStock, description } = data



        dispatch({
            type: ActionTypes.ADD_LIKE_CART_SUCCESS,
            payload: {
                product: _id,
                name,
                image,
                prics,
                rating,
                countInStock,
                description

            }

        })




        AsyncStorage.setItem(ActionTypes.STORY_LINE_ITEM, JSON.stringify([...getState().linke.LikeCart]))
        dispatch(ViewsAllLike())
    } catch (error) {
        console.log(error.response)
    }


}