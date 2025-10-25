const express = require('express')
const router = express.Router()

//middlewares
const auth = function(req, res, next){
    console.log("i am inside middleware function");

    //adding dummy user 
    req.user = {userId : 1, role:"student"};

    if(req.user){
        //if a valid user is there in req, then proceed to next middleware
        next();
    }
    else{
        //if not a valid user then return statement
        res.json({
            success : false,
            message : "Not a valid user , please log in first"
        })
    }
}

const isStudent = function(req, res, next){
    console.log("inside the student middleware");

    if(req.user.role === "student"){
        next();
    }
    else{
        res.json({
            success : false,
            message : "Access denied  : You are not a student !"
        })
    }
}

const isAdmin = function(req, res, next){
    console.log(" inside the admin middleware");

    if(req.user.role === "admin"){
        next();
    }
    else{
        res.json({
            success : false,
            message : "Access denied  : You are not a admin !"
        })
    }
}


//routes 
//checking now first auth then student or not
router.get("/student" , auth, isStudent , (req, res) => {
    console.log("I am inside student route");
    res.send("Student specific page !");
})

//checking now first auth then admin or not
router.get("/admin" , auth, isAdmin , (req, res) => {
    console.log("I am inside admin route");
    res.send("Admin specific page !");
})

//now have to mount my route things in index.js files

module.exports = router
