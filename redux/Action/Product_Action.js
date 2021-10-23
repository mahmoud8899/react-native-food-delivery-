
import * as ActionTypes from "./Types"
import axios from "axios"
import Url from "../Url"





// GET product id... 
// url .. /// /product/product/:id/
export const ProductIDAction = (id) => async (dispatch) => {

    try {
        dispatch({ type: ActionTypes.PRODUCT_ID_LOADING })

        const { data } = await axios.get(`${Url}api/product/product/${id}`)
        dispatch({ type: ActionTypes.PRODUCT_ID_SUCCESS, payload: data })
    } catch (error) {

        console.log(error.response.data)
        dispatch({
            type: ActionTypes.PRODUCT_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })

    }
}


// PUT  update product... ...
// post/post/edit/615c95d82572d61e64027e0d

export const UpdateProductAction = (user) => async (dispatch, getState) => {
    try {


        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATE_LOADING })


        const { userLogin: { userInfo }, } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.put(`${Url}api/post/post/edit/${user._id}`, user, config)
        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATE_SUCCESS, payload: data })
    } catch (error) {

        console.log(error.response.data)
        dispatch({
            type: ActionTypes.ADD_PRODUCT_UPDATE_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}





// post  category ...
// http://localhost:8000/api/category/create

export const createCategoryAction = (user) => async (dispatch, getState) => {
    try {


        dispatch({ type: ActionTypes.ADD_CREATE_CATEGORY_LOADING })


        const { userLogin: { userInfo }, } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }



        const { data } = await axios.post(`${Url}api/category/create/`, user, config)
        dispatch({ type: ActionTypes.ADD_CREATE_CATEGORY_SUCCESS, payload: data })
    } catch (error) {

        //  console.log(err)
        dispatch({
            type: ActionTypes.ADD_CREATE_CATEGORY_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}






// Delet  product ...
// http://localhost:8000/api/post/post/:id/

export const DeleteProductAction = (user) => async (dispatch, getState) => {
    try {


        dispatch({ type: ActionTypes.ADD_PRODUCT_DELETE_LOADING })


        const { userLogin: { userInfo }, } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }



        const { data } = await axios.delete(`${Url}api/post/post/${user}`, user, config)
        dispatch({ type: ActionTypes.ADD_PRODUCT_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_DELETE_FAIL,
            payload: error.response.data.message ?
                error.response.data.error :
                error.message
        })
    }
}




// POST create product ...
// http://localhost:8000/api//product/create/

export const productCreateAction = (user) => async (dispatch, getState) => {
    try {


        dispatch({ type: ActionTypes.ADD_PRODUCT_CREATE_LOADING })


        const { userLogin: { userInfo }, } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }



        const { data } = await axios.post(`${Url}api/product/create/`, user, config)
        dispatch({ type: ActionTypes.ADD_PRODUCT_CREATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_CREATE_FAIL,
            payload: error.response.data.message ?
                error.response.data.error :
                error.message
        })
    }
}


// category get.
// http://localhost:8000/api/category/all

export const getCategoryAction = () => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_CATEGORY_LOADING })

        const { data } = await axios.get(`${Url}api/category/all/`)
        dispatch({ type: ActionTypes.ADD_CATEGORY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CATEGORY_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}





export const AppendPagaination = (data) => ({
    type: ActionTypes.ADD_PAGINYION_SUCCESS,
    payload: data
})

export const setCategoryProductsPage = (checkPage) => ({
    type: ActionTypes.ADD_NEXT_PAGE,
    payload: checkPage
})


/*
 dispatch({ type: ADD_PAGINYION_LOADING })
*/
export const paginationUserAction = () => async (dispatch, getState) => {




    const calculatedPage = getState().paginationID.categoryProductsNextPages

    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage;


    if (nextRequestPage) {
        try {



            const { data } = await axios.get(`${Url}api/product/product/?pageNumber=${nextRequestPage}`)
            const { product } = data


            dispatch(AppendPagaination(product))


            const { pages, result: { next: { page } } } = data

            const nextpage = page > pages ? null : page




            // console.log('data pages', nextpage)

            dispatch(setCategoryProductsPage(nextpage))



        } catch (error) {

            dispatch({
                type: ActionTypes.ADD_CATEGORY_NEXTPAGE_FAIL,
                payload: error.response &&
                    error.response.data.message ?
                    error.response.data.message :
                    error.message

            })
        }

    }


}




export const appendCategoryAndProduct = (categoryId, data) => ({
    type: ActionTypes.ADD_CATEGORYPRODUCT_APPEND,
    payload: { categoryId, data }
})

export const AppendNumberCategoryProduct = (categoryId, nextPage) => ({
    type: ActionTypes.ADD_ADDNUMBERCATEGORYPRODUCT,
    payload: { categoryId, nextPage }
})

// product and category ... 
export const CategoryAndProductFilterAction = (user) => async (dispatch, getState) => {


    // console.log(typeof user)

    const calculatedPage = getState().paginationID.categoryProductsNextPagesxp[user]

    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage

    if (nextRequestPage) {
        try {


            const { data } = await axios.get(`${Url}api/product/category/${user}?pageNumber=${nextRequestPage}`)

            const { product } = data



            dispatch(appendCategoryAndProduct(user, product))


            const { pages, result: { next: { page } } } = data

            const nextpage = page > pages ? null : page

            console.log('data pages', nextpage)

            dispatch(AppendNumberCategoryProduct(user, nextpage))

        } catch (error) {

            dispatch({
                type: ActionTypes.ADD_CATEGORY_NEXTPAGE_FAIL,
                payload: error.response &&
                    error.response.data.message ?
                    error.response.data.message :
                    error.message


            })
        }
    }


}