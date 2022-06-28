
const inicialState = {
  recipes : [],
  search : [],
  Details : {},
  kinds : [],
   
}


const reducer = (state=inicialState,{type,payload}) => {
    switch(type){
      case 'ALL_RECIPES':
        return {...state,recipes:payload}
      case 'SEARCH_RECIPES':
          return {...state,search:payload}
      case 'GET_BY_ID': 
          return {...state,Details:payload}
       case 'GET_KINDS':
            return {...state,kinds:payload}
      case 'RESET': return state=inicialState
     
        default: return state
      }
      
}


export default reducer