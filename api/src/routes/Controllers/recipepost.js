//traigo los modelos de la base de datos
const  {Recipe, Kinds} = require('../../db');

async function createrecipe(recipe,diets){
  
 //Creamos la receta
  const obj = await Recipe.create(recipe)
    if (diets){
      //mapeo el arreglo de dietas, y por cada una agrego la receta creada
  diets.map(async (d)=>{
    const tipo= await Kinds.findAll({where:{Name:d}})
    obj.addKinds(tipo).then(p=>{console.log('created')}).catch(err =>{ console.log('error creating recipe')})
  })
}

 
}
module.exports = {createrecipe};