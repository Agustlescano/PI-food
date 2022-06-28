import React from 'react';
import Recipebuilder from './Recipebuilder';
import './estilos/ConteinerRecipes.css'
const ConteinersRecipes = (props) => {
    
    const {recipes} = props;
    
 return (<div className="conteiner-recipes">
     {recipes.map(e=><Recipebuilder receta={e}/>)}
 </div>)
}

export default ConteinersRecipes;