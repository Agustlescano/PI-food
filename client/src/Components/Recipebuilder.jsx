import {Link} from "react-router-dom"


const Recipebuilder = (receta) => {
    const recipe = receta.receta
    function buscarimg(image){
        if(image){return (<img src={image}></img>)}
        else {return (<img src={'https://img-9gag-fun.9cache.com/photo/aZ0Xrvz_460s.jpg'}></img>)}
    }
    function buscardiets(diets){
        if (diets){return diets.map(diet => <li>{diet}</li>)}
        else {return (<li>No hay diets</li>)}
    }
 return (
     <div className="recipe-builder">
         <h2>Name:{recipe.title}</h2>
         {buscardiets(recipe.diets)}
         {buscarimg(recipe.image)}
         <Link to={`/about/${recipe.id}`} >About</Link>
     </div>
 )
}

export default Recipebuilder;