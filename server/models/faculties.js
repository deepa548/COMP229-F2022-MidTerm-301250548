//File Name: COMP229-F2022-MidTerm-301250548
//Author name: Deepa K
//Student id: 301250548
//Web app name: Faculty Information


let mongoose = require("mongoose");

// create a model class
let Faculty = mongoose.Schema(
  {
    Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
  {
    collection: "faculties",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
