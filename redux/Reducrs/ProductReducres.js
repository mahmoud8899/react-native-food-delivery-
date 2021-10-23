
import * as ActionTypes from "../Action/Types"





// product id.. 
export const ProductidReducres = (state = { product: [] }, action) => {

    switch (action.type) {
        case ActionTypes.PRODUCT_ID_LOADING: return { loading: true }
        case ActionTypes.PRODUCT_ID_SUCCESS: return { ...state, product: action.payload, loading : false}
        case ActionTypes.PRODUCT_ID_FAIL: return {...state, error: action.payload ,loading : false}
        default: return state
    }
}



// update product...
export const UpdateProductReducres = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_PRODUCT_UPDATE_LOADING: return { loading: true }
        case ActionTypes.ADD_PRODUCT_UPDATE_SUCCESS: return { ...state, updateProduct: action.payload, loading: false }
        case ActionTypes.ADD_PRODUCT_UPDATE_FAIL: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}




// create category...
export const createCategorReducres = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_CREATE_CATEGORY_LOADING: return { loading: true }
        case ActionTypes.ADD_CREATE_CATEGORY_SUCCESS: return { ...state, Createcategory: action.payload, loading: false }
        case ActionTypes.ADD_CREATE_CATEGORY_FAIL: return { ...state, error: action.payload, loading: false }
        default: return state
    }
}






// create products..

export const DeleteProductReucres = (state = {}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_PRODUCT_DELETE_LOADING: return { loading: true }
        case ActionTypes.ADD_PRODUCT_DELETE_SUCCESS: return { ...state, deleteProduct: action.payload, loading: false }
        case ActionTypes.ADD_PRODUCT_DELETE_FAIL: return { error: action.payload, loading: false }

        default: return state
    }
}






// create products..
export const createproductReducres = (state = {}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_PRODUCT_CREATE_LOADING: return { loading: true }
        case ActionTypes.ADD_PRODUCT_CREATE_SUCCESS: return { ...state, createProduct: true, loading: false }
        case ActionTypes.ADD_PRODUCT_CREATE_FAIL: return { error: action.payload, loading: false }

        default: return state
    }
}


// all category.. 
export const CategoryReducres = (state = { category: {} }, action) => {

    switch (action.type) {

        case ActionTypes.ADD_CATEGORY_LOADING: return { loading: true }
        case ActionTypes.ADD_CATEGORY_SUCCESS: return { ...state, category: action.payload, loading: false }
        case ActionTypes.ADD_CATEGORY_FAIL: return { error: action.payload, loading: false }

        default: return state
    }
}



const InistState = {
    home: [],
    categoryProductsNextPages: undefined,
    categoryproduct: {},
    categoryProductsNextPagesxp: {},
    error: null,

}


export const paginationReucres = (state = InistState, action) => {

    switch (action.type) {







        case ActionTypes.ADD_PAGINYION_SUCCESS: return {

            ...state,
            home: [
                ...state.home,
                ...action.payload
            ]
        }
        case ActionTypes.ADD_NEXT_PAGE: return {


            ...state,
            categoryProductsNextPages: action.payload


        }

        case ActionTypes.ADD_CATEGORYPRODUCT_APPEND:
            const catgoryId = action.payload.categoryId

            // console.log('hera', action.payload)
            return {

                ...state,
                categoryproduct: {
                    ...state.categoryproduct,
                    [catgoryId]: (state.categoryproduct[catgoryId] || [])
                        .concat(action.payload.data)
                }

            }

        case ActionTypes.ADD_ADDNUMBERCATEGORYPRODUCT: return {

            ...state,
            categoryProductsNextPagesxp: {
                ...state.categoryProductsNextPagesxp,
                [action.payload.categoryId]: action.payload.nextPage,
            }
        }


        case ActionTypes.ADD_CATEGORY_NEXTPAGE_FAIL: return { error: action.payload }

        default: return state
    }
}


