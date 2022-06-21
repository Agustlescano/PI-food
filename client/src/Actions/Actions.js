// import {orders} from '../Functions aux/orderby'
const axios = require('axios') 

export const ALL_RECIPES = 'ALL_RECIPES'
export const GET_KINDS = 'GET_KINDS'
export const SEARCH_RECIPES = 'SEARCH_RECIPES'
export const GET_BY_ID = 'GET_BY_ID'



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
    console.log('all kinds')
    return dispatch => {
        axios.get('http://localhost:3001/Types')
        .then(res => {
            dispatch({
                type: GET_KINDS,
                payload: res.data
            })
        })
    }
}
export const searchbyname = (name) => {
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


export const addRecipe = (recipe) => {
    console.log(recipe)
    axios.post(`http://localhost:3001/recipe`,recipe)
    .then(res => {console.log(res)})
    .catch(err =>console.error(err))
}