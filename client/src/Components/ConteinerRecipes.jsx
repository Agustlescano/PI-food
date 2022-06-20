import React from 'react';
import Recipebuilder from './Recipebuilder';

const ConteinersRecipes = (props) => {
    
    const {recipes} = props;
    console.log(recipes);
 return (<div>
     {recipes.map(e=><Recipebuilder receta={e}/>)}
 </div>)
}

export default ConteinersRecipes;