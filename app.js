const express=require('express');
const mongoose=require('mongoose');
const app=express();
const PORT=8899;

//Connecting to MongoDB
mongoose.connect("mongodb://127.0.0.1/Fashion")
.then(res=> console.log("Connected"))
.catch(err=> console.log("error"+err))

//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//setting views
app.set("view engine","ejs");
app.set("views","./views");

app.use("/static", express.static("public"));

//route prefix
app.use("/",require("./routes/route"));

console.log()
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work at http://localhost:${PORT}`)
})
