const buildobjet=(recipe) =>{ 
    console.log(recipe)
    if (recipe.length === 0) return []
    const objet = {
        id:recipe[0].id,
        title: recipe[0].Name,
        summary: recipe[0].Description,
        diets: [],
        instructions: recipe[0].Steps,
        healthScore: recipe[0].HealthScore,
        weightWatcherSmartPoints: recipe[0].Puntuacion

    }

    recipe[0].kinds.map((kind) => objet.diets.push(kind.dataValues.Name))
    return objet
}
const buildobjets=(recipe,) =>{
    console.log(recipe.dataValues)
    const objet = {
    id:recipe.ID,
    title: recipe.dataValues.Name,
    summary: recipe.dataValues.Description,
    diets: [],
    instructions: recipe.dataValues.Steps,
    healthScore: recipe.dataValues.HealthScore,
    weightWatcherSmartPoints: recipe.dataValues.Puntuacion

}

recipe.dataValues.kinds.map((kind) => objet.diets.push(kind.dataValues.Name))
return objet}

module.exports = {buildobjet,buildobjets}