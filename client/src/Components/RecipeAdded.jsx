import { Link } from "react-router-dom";
import "./estilos/recipeAdded.css";
const RecipeAdded = () => {
  return (
    <div className="container">
      <h1>Recipe Added!</h1>
      <Link className="link" to={"/home"}>
        <>Back to Home</>
      </Link>
    </div>
  );
};
export default RecipeAdded;
