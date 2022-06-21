const validator = (recipe)=>{
 let message = []
 if(!recipe.Name.length){message.push('Name is required')}
 return message
}

module.exports = validator;