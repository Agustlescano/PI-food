export const filterby = (recipes, filter) =>{
    return recipes.filter(recipe => {
        recipe.diets.map(diets =>diets===filter)})

}