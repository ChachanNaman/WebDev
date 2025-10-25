
const express = require('express');  //to import or use something i use require() function ,
//  'express' is a toolbox which i will be needing soo imported or used that

const app = express();   //apprlication initiallised 


//variable that stores the port number 
const port = 3000;

app.get('/', (req, res) => {
    console.log("get request recieve ho chuki hai")
});
//app.get is request to path(/)

//request -> can be =  get, put , post , delete
//path -> /, /about, /blog 

//start your app or server 
app.listen(port , () => {
    console.log("hello how are you ? ")
});
//here i passed port and function to perform 


//soo whenever i got to browser and give localhost:3000 , i will get msg in terminal 'get request recieve ho chuki hai' 
//coz of whenever i run that i "request" and "get"  'get request recieve ho chuki hai' as a msg in reponse in console