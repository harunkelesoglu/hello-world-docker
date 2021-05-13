const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=> {
    res.send('Hello World');
});


app.listen(3000,(req,res)=>{
    console.log(`Hello world app listining at http://localhost:${port}`);
})