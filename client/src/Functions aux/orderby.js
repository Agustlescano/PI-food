
const orders=( state,order) =>{
   
    let ordenado
    
    if(order==='healthScore descent'){ordenado= [...state.sort((a,b)=> a.healthScore<b.healthScore?1 : -1)];}
    if(order==='healthScore ascent'){ordenado= [...state.sort((a,b)=> a.healthScore<b.healthScore?1 : -1)];}
    if(order==='name descent'){ordenado= [...state.sort((a,b)=>a.title< b.title ? 1 : -1)];}
    if(order==='name ascent'){ordenado= [...state.sort((a,b)=> a.title> b.title ? 1 : -1)];}
    console.log(ordenado)
    return ordenado
    
}
module.exports = orders