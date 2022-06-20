 const filterby = (recipes, filter) =>{
    if (filter === 'all') {
        return recipes
    }
    
    let filtrados = recipes.filter(recipe => recipe.diets.includes(filter))
    
    return filtrados
}

module.exports = filterby