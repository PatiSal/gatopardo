"use strict";
const express = require("express");
let router = express.Router();


//rotas para /things/cars
router
    .route("/homepageArtistas")
    .get((req, res) =>{
        // /things/cars é a rota
        res.send("homepage artistas")
    })
    .post((req, res) =>{

        res.send("hi post/things/cars é a rota")
    });

router
    .route("/cars/:carsid")
    .get((req, res) =>{});



module.exports = router;