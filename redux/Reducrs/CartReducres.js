
import * as TypesAction from "../Action/Types"


export const AddToCartReducres = (state = [], action) => {

    switch (action.type) {
        case TypesAction.ADD_TO_CART: return [...state, action.payload]
        case TypesAction.REMOVE_CART: return state.filter((x) => x !== action.payload)
        case TypesAction.CLON_CART: return state = []
        default: return state
    }

}