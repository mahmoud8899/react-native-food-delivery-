import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/"
import * as ActionTypes from "../Action/Types"
import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserReducresLogin } from "../Reducrs/AuthRedusre"

import { AddToCartReducres } from "../Reducrs/CartReducres"

import {
    paginationReucres,
    CategoryReducres,
    createproductReducres,
    DeleteProductReucres,
    createCategorReducres,
    UpdateProductReducres,
    ProductidReducres,
} from "../Reducrs/ProductReducres"


import { AddLikeReducres } from "../Reducrs/AddLikeReducres"

const reducers = combineReducers({
    dataCart: AddToCartReducres,



    userLogin: UserReducresLogin,


    paginationID: paginationReucres,
    ALLcategory: CategoryReducres,
    createPro: createproductReducres,
    productDelet: DeleteProductReucres,
    createCategoryID: createCategorReducres,
    updateProductID: UpdateProductReducres,
    productID : ProductidReducres,


    linke: AddLikeReducres
})

async function mahmoud () {
  try {
    const value = await AsyncStorage.getItem(ActionTypes.KEYTOKEN);
    if (value !== null) {
      // We have data!!
      JSON.parse(value)
    return  console.log('localStor..',JSON.parse(value))
    }
  } catch (error) {
    // Error retrieving data
  }
}


mahmoud()



const intialstate = ({




  userLogin: {
      userInfo: mahmoud
  },




})





const middleware = [thunk]
const store = createStore(
    reducers, intialstate, composeWithDevTools(applyMiddleware(...middleware))
)

export default store