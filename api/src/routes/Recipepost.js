const express = require("express");
const app = express.Router();
const { createrecipe } = require("./Controllers/recipepost");

app.post("/", async function (req, res) {
  //traigo los datos necesarios del body
  const { Name, Details, Puntuacion, HealthScore, instructions, types } =
    req.body;
  console.log(req.body);
  const recipe = {
    Name: Name,
    Details: Details,
    Puntuacion: Puntuacion,
    HealthScore: HealthScore,
    Steps: instructions,
  };
  //verifico que Name y Details existan
  if (Name && Details) {
    //Llamo a la funcion para crear la receta

    await createrecipe(recipe, types).then(res.send({ message: "Created" }));
  } else {
    res.send("Faltan datos obligatorios");
  }
});
module.exports = app; //exporto el router
