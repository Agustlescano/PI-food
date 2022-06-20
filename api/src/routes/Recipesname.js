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
          console.log(found)
          await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}${key}&addRecipeInformation=true`)
          .then(respuesta => respuesta.data.results.map(recipe => found.push(recipe))).catch(err => console.log(err))
         // capturamos si es que hay un error en la api, y si found es vacio, retornamos el mensaje de que no hay recetas
          if (!found){ res.status(404).send('No se encontraron recetas')}else {res.send(found)};
      } else {
        let found = await foundRecipes();
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&number=100${key}&addRecipeInformation=true`)
        .then(respuesta => respuesta.data.results.map(recipe => found.push(recipe))).catch(err => console.log(err))
        res.send(found)
      }
  })

  










  module.exports = app;