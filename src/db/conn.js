const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:root@cluster0.ye8bm09.mongodb.net/ttjyoti?retryWrites=true&w=majority", { useNewUrlParser: true,
useUnifiedTopology:true,
//useCreateIndex:true
} ).then(() => {

 console.log("connection successful");
})

.catch((err) => console.log(err));