const express = require('express')
const app = express()
const port = 3000

//importing middleware for json file , as i taking input in body in json formal 
// here inbuilt middleware is used to parse the given json data 
app.use(express.json());

//creating 3 middlewares -> logging, authentication , validation 

//creation of middleware
const loggingmiddleware = function (req, res, next) {
    console.log("inside logging middlware");
    next();
};
//loading middleware into application
app.use(loggingmiddleware);

const authmiddleware = function (req, res, next) {
    console.log("inside authentication middleware");
    next();
}
app.use(authmiddleware);

const validmiddleware = function (req, res, next) {
    console.log("inside validation middleware");
    next();
}
app.use(validmiddleware);


//print the body of my request i sent from POSTMAN in raw json formal
app.get('/', (req, res) => {
    console.log("inside route handler");
    console.log(req.body);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
