const express = require('express')
const app = express()
const port = 3000

// import router
const itemRoutes = require('./routes/route')

// mount router
app.use('/api', itemRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
