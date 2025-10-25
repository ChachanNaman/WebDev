const express = require('express')
const app = express()
const port = 3000

//importing middleware for json file , as i taking input in body in json formal 
// here inbuilt middleware is used to parse the given json data 
app.use(express.json());


const route = require('./Routes/route');
app.use('/api' , route); //MOUNTED MY FILE 

// -> /api/student
// -> /api/admin 

//print the body of my request i sent from POSTMAN in raw json formal
app.get('/', (req, res) => {
    console.log("inside route handler");
    console.log(req.body);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
