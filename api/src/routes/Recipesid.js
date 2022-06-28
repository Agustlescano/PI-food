const express = require("express");
const app = express.Router();
const axios = require("axios");
//nos traemos la funcion para buscar por ID
const { foundID } = require("./Controllers/searchdbrecipe");

app.get("/:idReceta", async (req, res) => {
  const { idReceta } = req.params;
  const key = process.env.API_KEY;
  const id = Number(idReceta);
  //Comprobamos que el id recibido sea de la base de datos o de la api
  if (isNaN(id) && idReceta.length === 36) {
    const result = await foundID(idReceta);
    res.send(result);
  }
  if (idReceta && !isNaN(id)) {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false${key}`
      )
      .then((r) => res.send(r.data))
      .catch((err) => res.send(err));
  }
});

module.exports = app;
