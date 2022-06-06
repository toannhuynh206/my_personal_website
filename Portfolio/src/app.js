
const path = require('path');
const express = require('express');
const app = express();

app.listen(3000,()=> {
    console.log("oh yeahhh")})

app.use(express.static("/Users/toanhuynh/Desktop/my_personal_website/Portfolio"))

app.get('*',(req,res)=>{
    res.send("<h1 style ='text-allign:center'> 404 PAGE NOT FOUND <h1>")
}
)


