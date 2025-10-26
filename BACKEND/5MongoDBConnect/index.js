const express = require('express');
const app = express();
const connectDB = require('./db');

const PORT = 3000;

//body parser
app.use(express.json());
//connect to database
connectDB();

app.get('/' , (req, res) => {
    console.log("I am inside the handler function");
    res.send("Hello , Welcome Naman");
})


app.listen(PORT , ()=>{
    console.log("Server is up Guys !");
})