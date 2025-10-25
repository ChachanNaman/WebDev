//this file will contains all my items , i am using in my site 

const express = require('express')
const router = express.Router()


// define the home page route
//get request 
router.get('/', (req, res) => {
    // res.send("got a GET request");

    // res.sendFile('./hello.html', {root:__dirname } )
    //will run now hello.html when i reload the site

    res.download('./Documentation.pdf');
});

//post request
router.post('/items' , (req, res) => {
    // res.send("got a POST request");

    res.json({x:2, y:1, z:9});
    //will get the json as output in terminal in POSTMAN
})

//put request
router.put('/items/:id' , (req, res) => {
    res.send("got a PUT request");
})

//delete request
router.delete('/items/:id' , (req, res) => {
    res.send("got a DELETE request");
})

module.exports = router
