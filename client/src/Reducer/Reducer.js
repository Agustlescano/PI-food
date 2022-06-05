const inicialState = {
  recipes : [],
  search : {},
  Kinds : [],
   
}


async function reducer (state=inicialState,{type,payload}) {
    switch(type){
      case 'ALL_RECIPES':
        return {...state,recipes:payload}
      case 'GET_KINDS':
          return {...state,Kinds:payload}
      case 'SEARCH_RECIPES':
        return {...state,search:payload}
      case 'GET_BY_ID': 
        return {...state,search:payload}
      case 'ORDER_BY':
        let orderBy = await orderBy(state.recipes,payload)
        return {...state,recipes:orderBy}
      case 'FILTER_BY':
        let filterBy = await filterBy(state.recipes,payload)
        return {...state,recipes:filterBy}
        default: return state
      }
}


export default reducer