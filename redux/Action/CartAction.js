import * as TypesAction from "./Types"


// ADD TO CART...
export const AddToCart = (data) => {
  //  console.log('action', data)
    return {
        type: TypesAction.ADD_TO_CART,
        payload: data
    }
}

export const removeFromCart = (payload) => {
    return {
        type: TypesAction.REMOVE_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: TypesAction.CLON_CART
    }
}




