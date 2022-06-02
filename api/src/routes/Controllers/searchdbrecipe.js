//En esta funcion buscamos las recetas en la base de datos y las retornamos en un arreglo
//primero importo la base de datos recipes 
const  {Recipe} = require('../../db');

 async function foundRecipes(name){
  if (name){
      return await Recipe.findAll({
          where :{ Name : name}
      })
           }
  ;
}
async function foundID(id){
  if (id){
      return await Recipe.findAll({
          where :{ ID : id}
      })
           }
  ;
}
module.exports = {foundRecipes,foundID};