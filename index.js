const express = require("express");

const app = express();

app.get('/', (req,res)=>{

    res.send("Welcome to AWS nodejs app")
})

app.listen(80,()=>{
    console.log("AWS nodejs app is running on port 80.")
})