const validator = (recipe)=>{
 let message = []
 if(!recipe.Name.length){message.push('Name is required')}
 if (!recipe.Details.length){message.push('Details is required')}
 if (!recipe.types.length){message.push('Types of diets is required')}
 if (recipe.Puntuacion<=0 || isNaN( recipe.Puntuacion)){message.push('Points is required')}
 if (recipe.HealthScore<=0 || isNaN(recipe.HealthScore)){message.push('HealthScore is required')}
 if (!recipe.instructions.length){message.push('Instructions is required')}
 return message
}


module.exports = validator;