
import * as ActionTypes from "../Action/Types"


const createState = {
    LikeCart: [],
    addData: {}
}

export const AddLikeReducres = (state = createState, action) => {
    switch (action.type) {

        case ActionTypes.ADD_LIKE_CART_SUCCESS:
            const likeUser = action.payload

            const checkItems = state.LikeCart.find((x) => x.product === likeUser.product)

            if (checkItems) {
                return {
                    ...state,
                    LikeCart: state.LikeCart.map((x) => x.product === checkItems.product ? likeUser : x)
                }

            } else {

                return {
                    ...state,
                    LikeCart: [...state.LikeCart, likeUser]
                }


            }



        case ActionTypes.ADD_DATA: return {
            ...state,
            addData: action.payload
        }

        case ActionTypes.REMOVE_ITEM_STORY:
            return {

                ...state,
                addData: state.addData.filter((x) => x.product !== action.payload),
                LikeCart: state.LikeCart.filter((x) => x.product !== action.payload)

            }

        default: return state
    }
}