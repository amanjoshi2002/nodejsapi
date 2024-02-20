const express =  require('express');
const app =  express();
const dotenv = require("dotenv").config();
const Port = process.env.PORT;


app.listen(
    Port,()=>console.log('Server is running on ${Port}')
)


//POST
app.get('/api/contacts',(req,res)=>{
    res.status(200).json({
        message:"get all contacts"
    })
});