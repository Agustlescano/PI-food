 const filterby =(recipes, value) =>{
   let filtrados = [1,2];
    if(value === undefined){return}
    if (value === 'All Recipes') {
        return recipes
    }
    if (value=== 'creados'){
        filtrados= recipes.filter(recipes => recipes.created)
    }else {
        filtrados = recipes.filter(recipe => recipe.diets.includes(value))
    }
    console.log(value)
    console.log(filtrados)
    if (filtrados.length === 0) {alert('not recipes matchers')}
    return filtrados
}

module.exports = filterby