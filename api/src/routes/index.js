const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Recipename = require("./Recipesname");
const Recipeid = require("./Recipesid");
const Recipepost = require("./Recipepost");
const Types = require("./Types");

const router = Router();

// Configurar los routers

router.use("/recipes", Recipename);
router.use(`/recipes/`, Recipeid);
router.use("/types", Types);
router.use(`/recipe`, Recipepost);
module.exports = router;
