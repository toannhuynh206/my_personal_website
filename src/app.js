
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT;


app.use(express.static("/Portfolio"))


app.get('*',(req,res)=>{
    res.send("<h1 style ='text-allign:center'> 404 PAGE NOT FOUND <h1>")
}
)

app.listen(port,()=> {
    console.log("oh yeahhh")})


