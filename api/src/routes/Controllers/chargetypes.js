const  {Kinds} = require('../../db');
//traemos la tabla de kinds

async function chargeKinds(){
    //cargamos la tabla de kinds
    const GlutenFree = await Kinds.create({Name: 'gluten free'});
    const Ketogenic = await Kinds.create({Name: 'ketogenic'});
    const Vegetarian = await Kinds.create({Name: 'vegetarian'});
    const LactoVegetarian = await Kinds.create({Name: 'lacto ovo vegetarian'});
    // const Ovovetarian = await Kinds.create({Name: 'ovo vegetarian'});
    const Vegan = await Kinds.create({Name: 'vegan'});
    const Pescetarian = await Kinds.create({Name: 'pescetarian'});
    const Paleo = await Kinds.create({Name: 'paleo'});
    const Primal = await Kinds.create({Name: 'primal'});
    const Lowfodmap = await Kinds.create({Name: 'low fodmap'});
    const Whole30 = await Kinds.create({Name: 'whole 30'});
}

module.exports = {chargeKinds};