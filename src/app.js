const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
//  public static path 
const static_path = path.join(__dirname,"../public")
const temp_path = path.join(__dirname,"../templets/views");
const pp = path.join(__dirname,"../templets/partials");


 
app.set("view engine","hbs");
app.set("views",temp_path);
app.use(express.static(static_path));
hbs.registerPartials(pp);

// routing
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error"),{
    error : 'Opps ! Page not found',
    }
})

app.listen(port,()=>{
    console.log(`server ${port} is running...`)
})