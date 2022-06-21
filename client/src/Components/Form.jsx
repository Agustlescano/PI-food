import {Link} from 'react-router-dom'
import react, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addRecipe, allKinds } from '../Actions/Actions';
import Select from 'react-select'

import validator from '../Functions aux/validators';

const Form =() =>{
    const dispatch = useDispatch();
    let kinds = useSelector((state) => state.kinds);
    let options =[]
    let add = false
    kinds.map(kind => options.push({
        value : kind.Name,
        label: kind.Name
    }))
    
    useEffect(() => {
    dispatch(allKinds())
    },[dispatch])
   
    const [recipe,setRecipe] = useState({
            Name: '',
            Details: '',
            Puntuacion: '',
            HealthScore: '',
            types:[],
            instructions: '',});
    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe(recipe)
        add=true

    }
   if (add){return(<>
   <Link to={'/home'}>Home</Link>
   <h1>receta agrega con exito</h1>
   </>)}
    return (<>
    <Link to={'/home'}>Home</Link>
    {validator(recipe).map(e=>(<li>{e}</li>))
    }
    <form onSubmit={handleSubmit}>
        <label htmlFor={recipe.Name}>Name</label>
        <input type="text" Key={recipe.Name} value={recipe.Name} onChange={(e) => setRecipe({...recipe, Name: e.target.value})}/>
        <label htmlFor={recipe.Details}>Details</label>    
        <input type="text" Key={recipe.Details} value={recipe.Details} onChange={(e) => setRecipe({...recipe, Details: e.target.value})}/> 
        <label htmlFor={recipe.Puntuacion}>Punctuation</label>
        <input type="number" Key={recipe.Puntuacion} value={recipe.Puntuacion} onChange={(e) => setRecipe({...recipe, Puntuacion: parseInt(e.target.value)})}/>
        <label htmlFor={recipe.HealthScore}>Health Score</label>   
        <input type="number" Key={recipe.HealthScore} value={recipe.HealthScore} onChange={(e) => setRecipe({...recipe, HealthScore: parseInt(e.target.value)})}/>
        <label htmlFor={recipe.types}>Select kind of diets</label>
        <Select options ={options} isMulti onChange={(e) => setRecipe({...recipe,types: e})}/>
        <label htmlFor={recipe.instructions}>Instructions</label>
        <input type="text" Key={recipe.instructions} value={recipe.instructions} onChange={(e) =>setRecipe({...recipe, instructions: e.target.value})}/>
        <input type="submit" value="Submit" disabled={validator(recipe).length}/>
        
    </form>
    
    </>)

}
export default Form;