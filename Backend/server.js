require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const router=require("./Roters/router");
const cors = require('cors');


const app=express();

app.use(cors());
//midware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});
//route
app.use("/",router);


//MONGO CONNECT
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URI)
 .then((result)=>{
    console.log("connected to db");
    app.listen(process.env.PORT,()=>{
        console.log("listening to port");
    })
 })
 .catch((err)=>{
    console.log("not connected: ",err);
 })
