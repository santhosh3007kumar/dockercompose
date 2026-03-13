const express = require("express");

const app = express();

app.get("/api", (req,res)=>{
 res.send("Hello from Backend 🚀");
});

app.listen(5000,"0.0.0.0",()=>{
 console.log("Backend running");
});