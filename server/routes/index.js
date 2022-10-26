//File Name: COMP229-F2022-MidTerm-301250548
//Author name: Deepa K
//Student id: 301250548
//Web app name: Faculty Information


// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let faculty = require("../models/faculties");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    faculties: "",
  });
});

module.exports = router;
