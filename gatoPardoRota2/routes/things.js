"use strict";
const express = require("express");
let router = express.Router();


//rotas para /things/cars
router
    .route("/cars")
    .get((req, res) =>{
        // /things/cars é a rota
        res.send("hi /things/cars é a rota")
    })
    .post((req, res) =>{

        res.send("hi  post/things/cars é a rota")
    });

router
    .route("/cars/:carsid")
    .get((req, res) =>{});



module.exports = router;