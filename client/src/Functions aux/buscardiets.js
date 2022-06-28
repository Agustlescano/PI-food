export const buscardiets = (diets)=>{
    if (diets){return diets.map(diet => <li>{diet}</li>)}
    else {return (<li>No hay diets</li>)}
}