const axios = require('axios') 

export const ALL_RECIPES = 'ALL_RECIPES'
export const GET_KINDS = 'GET_KINDS'
export const SEARCH_RECIPES = 'SEARCH_RECIPES'
export const GET_BY_ID = 'GET_BY_ID'
export const ORDER_BY = 'ORDER_BY'
export const FILTER_BY = 'FILTER_BY'


export const allRecipes = () => {
    return dispatch => {
        axios.get('http://localhost:3001/recipes')
        .then(res => {
            dispatch({
                type: ALL_RECIPES,
                payload: res.data
            })
        })
    }
}
export const allKinds = () => {
    return dispatch => {
        axios.get('http://localhost:3001/kinds')
        .then(res => {
            dispatch({
                type: GET_KIND,
                payload: res.data
            })
        })
    }
}
export const search = (name) => {
    return dispatch => {
        axios.get(`http://localhost:3001/recipes?name=${name}`)
        .then(res => {
            dispatch({
                type: SEARCH_RECIPES,
                payload: res.data
            })
        })
    }
}
export const getById = (id) => {
    return dispatch => {
        axios.get(`http://localhost:3001/recipes/${id}`)
        .then(res => {
            dispatch({
                type: GET_BY_ID,
                payload: res.data
            })
        })
    }
}
export const orderBy = (order) => {
    return dispatch => {
            dispatch({
                type: ORDER_BY,
                payload: order
            })
        }
    }
export const filterBy = (filter) => {
    return dispatch => {
            dispatch({
                type: FILTER_BY,
                payload: filter
            })
        }
    }
export const addRecipe = (recipe) => {
    axios.post(`http://localhost:3001/recipe`,recipe)
    .then(res => {console.log(res)})
    .catch(err =>console.error(err))
}