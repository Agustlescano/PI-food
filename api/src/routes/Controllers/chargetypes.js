const  {Kinds} = require('../../db');
//traemos la tabla de kinds

async function chargeKinds(){
    //cargamos la tabla de kinds
    const GlutenFree = await Kinds.findOrCreate({where:{Name: 'gluten free'}});
    const Ketogenic = await Kinds.findOrCreate({where:{Name: 'ketogenic'}});
    const Vegetarian = await Kinds.findOrCreate({where:{Name: 'vegetarian'}});
    const LactoVegetarian = await Kinds.findOrCreate({where:{Name: 'lacto ovo vegetarian'}});
    // const Ovovetarian = await Kinds.create({Name: 'ovo vegetarian'});
    const Vegan = await Kinds.findOrCreate({where:{Name: 'vegan'}});
    const Pescetarian = await Kinds.findOrCreate({where:{Name: 'pescetarian'}});
    const Paleo = await Kinds.findOrCreate({where:{Name: 'paleo'}});
    const Primal = await Kinds.findOrCreate({where:{Name: 'primal'}});
    const Lowfodmap = await Kinds.findOrCreate({where:{Name: 'low fodmap'}});
    const Whole30 = await Kinds.findOrCreate({where:{Name: 'whole 30'}});
}

module.exports = {chargeKinds};