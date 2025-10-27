const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require('./Routes/users');
const PORT = 3000;

//body parser
app.use(express.json());
//connect to database
connectDB();

//import router file
app.use('/api' , users);

/// -> /api/users  -> will call users.js in routes folder and call get and post functions according to get and post in postman 

app.get('/' , (req, res) => {
    console.log("I am inside the handler function");
    res.send("Hello , Welcome Naman");
})


app.listen(PORT , ()=>{
    console.log("Server is up Guys !");
})