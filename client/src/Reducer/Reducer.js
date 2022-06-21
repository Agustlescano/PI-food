
const inicialState = {
  recipes : [],
  search : [],
  Details : {},
  kinds : [],
   
}


const reducer = (state=inicialState,{type,payload}) => {
    switch(type){
      case 'ALL_RECIPES':
        console.log(payload)
        return {...state,recipes:payload}
      case 'GET_KINDS':
        console.log(payload)
        return {...state,kinds:payload}
      case 'SEARCH_RECIPES':
        return {...state,search:payload}
      case 'GET_BY_ID': 
        return {...state,Details:payload}
     
        default: return state
      }
      
}


export default reducer