const express = require('express');
const router = express.Router();

const user = require('../models/userModel');

//routes

//CRUD opertaion -> create , update , delete 

// View/Read
router.get('/users', async (req, res) => {   //async function -> wait till fetch then move to next function
    try {
        //doing interaction with database soo use -> await
        const users = await user.find(); //to fetch all the users
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

// Creation 
router.post('/users', async (req, res) => {
    try {
        console.log("req recieved for post method")
        const { name, age, weight } = req.body; //firstly fetch from the body of request 
        const newUser = new user({ name, age, weight });   //create new user of that entry 
        await newUser.save(newUser);   //to save the new entry
        res.status(201).json({ // Send a success response
            success: true,
            message: "User created successfully",
            user: newUser
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//Update -> put

router.put('/users/:id' , async(req, res) => {
    const {id} = req.params; //fetch the id 
    const {name, age, weight} = req.body;

    try{
        //use User model and find the user by id and insert new updated things in updateUser
        const updateUser =  await user.findByIdAndUpdate(id, {name , age , weight});
        if(!updateUser){
            res.json({
                message : "user not found"
            })
        }
        //but if you have updated the user then send success msg
        res.status(200).json({
            success: true,
            user : updateUser
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

// Delete 
router.delete('/users/:id' , async(req, res) => {
    const {id} = req.params; //fetch the id 
    const {name, age, weight} = req.body;

    try{
        //use User model and find the user by id and insert new updated things in updateUser
        const deleteUser =  await user.findByIdAndDelete(id, {name , age , weight});
        if(!deleteUser){
            res.json({
                message : "user not found"
            })
        }
        //but if you have updated the user then send success msg
        res.status(200).json({
            success: true,
            user : deleteUser
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;