
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ttjyoti", { useNewUrlParser: true,
useUnifiedTopology:true,
useCreateIndex:true
} ).then(() => {

 console.log("connection successful");
})

.catch((err) => console.log(err));
