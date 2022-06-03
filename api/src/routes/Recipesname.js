const express = require('express');
const app = express.Router();
const axios = require('axios');
const {foundRecipes} = require('./Controllers/searchdbrecipe');

  app.get('/', async function(req, res){
    const {name} = req.query
    const key = process.env.API_KEY;
    //verificamos que nombre exista y buscamos tanto en la bs como en la api
      if (name){
          let found = await foundRecipes(name);
          await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}${key}&addRecipeInformation=true`)
          .then(res => res.data.results.map(recipe => found.push(recipe)))
          res.send(found)
          
      } else res.send('no hay nombre')
  })

  










  module.exports = app;