import * as ActionTypes from "../Action/Types"



const stateMaps = {
    loading: false,
    userInfo: {},
    error: null

}

// user login in... 
export const UserReducresLogin = (state = stateMaps, action) => {


    switch (action.type) {
        case ActionTypes.ADD_USER_LOADING: return { loading: true }
        case ActionTypes.ADD_USER_SUCCESS: return {
            ...state,
            userInfo: action.payload,
            loading: false
        }
        case ActionTypes.ADD_USER_FAIL: return {
            error: action.payload,
            loading: false
        }
        case ActionTypes.ADD_USER_EMPTY: return state = []
        default: return state
    }
}