const express = require('express');
const app = express.Router();
//traemos la base de datos
const  {Kinds} = require('../db');

app.get('/', async(req, res) => {
    //respondemos con toda la informacion guardada de db
 res.send(await Kinds.findAll());
})

module.exports = app;