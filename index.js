const express = require('express');
require('dotenv').config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/twitter",(req,res)=>{
    res.send("Hiteshdotcom");
})

app.get("/login",(req,res)=>{
    res.send('<h1>Please Login at Chai aur code</h1>')
})

app.get("/youtube",(req,res)=>{
    res.send("<h1>Chai aur code </h1>");
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
})