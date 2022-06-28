import {Link, useNavigate} from 'react-router-dom'
import react, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addRecipe, allKinds, allRecipes } from '../Actions/Actions';
// import Select from 'react-select'
import './estilos/Form.css';

import validator from '../Functions aux/validators';
const Form =() =>{
    const dispatch = useDispatch();
    let kinds = useSelector((state) => state.kinds);
    let options =[]
    kinds.map(kind => options.push({
        value : kind.Name,
        label: kind.Name
    }))
 const navigate = useNavigate()
    
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
       navigate('/recipeAdded')
       
      
    }
   
    return (<div className="form">
        <div>
    <Link className='link' to={'/home'}>Home</Link>
        </div>
    <div>
    {validator(recipe).map(e=>(<li>{e}</li>)) }
    </div>
<div>

    <form onSubmit={handleSubmit} className='formulario'>
        <label htmlFor={recipe.Name}>Name</label>
        <input className='input' type="text" Key={recipe.Name} value={recipe.Name} onChange={(e) => setRecipe({...recipe, Name: e.target.value})}/>
        <label htmlFor={recipe.Puntuacion}>Points</label>
        <input className='input' type="number" Key={recipe.Puntuacion} value={recipe.Puntuacion} onChange={(e) => setRecipe({...recipe, Puntuacion: parseInt(e.target.value)})}/>
        <label htmlFor={recipe.HealthScore}>Health Score</label>   
        <input className='input' type="number" Key={recipe.HealthScore} value={recipe.HealthScore} onChange={(e) => setRecipe({...recipe, HealthScore: parseInt(e.target.value)})}/>
        <label htmlFor={recipe.Details}>Details</label>    
        <input className='instructions' type="text" Key={recipe.Details} value={recipe.Details} onChange={(e) => setRecipe({...recipe, Details: e.target.value})}/> 
        <label htmlFor={recipe.types}>Select kind of diets</label>
        {/* <Select className='select' options ={options} isMulti onChange={(e) => setRecipe({...recipe,types: e})}/> */}
       <select className='select'  multiple={true} onChange={(e) => setRecipe({...recipe,types:[...recipe.types, e.target.value]})} required>
        {options.map(k=>{return(<>
           <option value={k.value}>{k.label} </option>
        </>
        )})}
       </select>
       
        <label htmlFor={recipe.instructions}>Instructions</label>
        <input className='instructions' type="text" Key={recipe.instructions} value={recipe.instructions} onChange={(e) =>setRecipe({...recipe, instructions: e.target.value})}/>
        <input type="submit" value="Submit" disabled={validator(recipe).length}/>
        
    </form>
    </div>
    
    </div>)

}
export default Form;