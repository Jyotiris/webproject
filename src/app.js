const express = require("express");
const path =require("path");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const Register = require("./models/registers");
//mongoose.connect("mongodb://localhost:27017/ttjyoti");
const port = process.env.PORT ||8008;
const static_path =path.join(__dirname, "../views" );
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app .set("view engine", "hbs");
app.get("/",(req, res) => {
    res.render("index")

});
app.get("/register",(req, res) => {
    res.render("register");
})


app.post("/register", async (req, res) => {
    try{

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){

            const registerEmployee = new Register({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                password : password,
                confirmpassword : cpassword
             });

            const registererd = await registerEmployee.save();
            res.status(201).render("index");

        }else{
            res.send("Password are not matching")
        }

    }catch (error) {
        res.status(400).send(error);
    }
});

app.get("/login",(req, res) => {
    res.render("login");

});

app.post("/login", async (req, res) => {
    try{

        const email= req.body.email;
        const password= req.body.password;

     const useremail = await Register.findOne({email:email});
     if(useremail.password === password){
        res.status(201).render("index");
     }else{
        res.send("Invalid login details");
     }

    }catch(error) {
        res.status(400).send("Invalid login details");
    }

});

app.listen(port, () => {
    console.log('server is running at port no at ${port}');
});