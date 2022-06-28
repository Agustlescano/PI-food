
const axios = require('axios') 

export const ALL_RECIPES = 'ALL_RECIPES'
export const GET_KINDS = 'GET_KINDS'
export const SEARCH_RECIPES = 'SEARCH_RECIPES'
export const GET_BY_ID = 'GET_BY_ID'
export const RESET = 'RESET'


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
        .then(res => {console.log(res.data)
            dispatch({
                type: SEARCH_RECIPES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SEARCH_RECIPES,
                payload: [{title:'No results found'}]
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
    .then(res => {alert('Recipe added')})
    .catch(err =>console.error(err))
}
export const reset =()=>{
    return dispatch => {
        dispatch({
            type: RESET
        })
    }
}