import { Link } from "react-router-dom";
import { buscarimg } from "../Functions aux/buscarimg";
import { buscardiets } from "../Functions aux/buscardiets";
import "./estilos/Recipebuilder.css";
const Recipebuilder = (receta) => {
  const recipe = receta.receta;

  return (
    <div className="card">
      <div className="face front">
        {buscarimg(recipe.image)}
        <h3>{recipe.title}</h3>
      </div>
      <div className="face back">
        {buscardiets(recipe.diets)}
        <div className="link">
          <Link to={`/about/${recipe.id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Recipebuilder;
