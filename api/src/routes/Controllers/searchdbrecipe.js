//En esta funcion buscamos las recetas en la base de datos y las retornamos en un arreglo
//primero importo la base de datos recipes 
const  {Recipe, Kinds} = require('../../db');
const {buildobjet,buildobjets} = require('./buildobjets');

 async function foundRecipes(name){
  console.log(name)
  if (name){
      let result = await Recipe.findAll({
          where :{ Name : name},include: [{model: Kinds}] 
      })
        let objetos = []
        for(let i = 0; i < result.length; i++){
          objetos.push(buildobjets(result[i],i))
        }
        return objetos
      } else {
             let objetos = []
             let result =await Recipe.findAll({include: [{model: Kinds}]})
             for(let i = 0; i < result.length; i++){
              objetos.push(buildobjets(result[i],i))
            }
            return objetos };
  ;
}
async function foundID(id){
  
  if (id){
    let results = await Recipe.findAll({
      where :{ ID : id},include: [{model: Kinds, attributes:["Name"]}]}) 
    let obj = buildobjet(results)

     if (obj.length ===0){return ['No se encuentra en la base de datos']}
     else{return obj}
     
    }
  ;
}
module.exports = {foundRecipes,foundID};