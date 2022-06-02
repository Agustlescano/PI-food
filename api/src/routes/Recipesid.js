const express = require('express');
const app = express.Router();
const axios = require('axios');
const {foundID} = require('./Controllers/searchdbrecipe');

app.get('/:idReceta', async (req, res) => {
    const { idReceta } = req.params;
    const key = process.env.API_KEY;
    const id = Number(idReceta)
    if(isNaN(id) && idReceta.length ===36){
      console.log('aca entra')
      await foundID(idReceta)
      .then(found => res.send(found))
      .catch(err => res.send(err));
    }
    if (idReceta && !isNaN(id)) {
        await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false${key}`)
        .then(r => res.send(r.data))
        .catch(err => res.send(err))
    }else 
    { res.send('no hay id valido')}
})

module.exports = app;