const express = require('express')
const router = express.Router()

// GET request
router.get('/', (req, res) => {
    res.sendFile('/Users/namanchachan/Desktop/webdev/BACKEND/6Practise/dummy.html')
})

// POST request
router.post('/items', (req, res) => {
    res.json({ x: 1, y: 3, z: 4 })
})

// PUT request
router.put('/items/:id', (req, res) => {
    res.send("Got a PUT request")
})

// DELETE request
router.delete('/items/:id', (req, res) => {
    res.send("Got a DELETE request")
})

// THIS WAS MISSING
module.exports = router
