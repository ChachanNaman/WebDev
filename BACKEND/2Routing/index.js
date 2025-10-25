const express = require('express')
const app = express()
const port = 3000

//imported my items.js file first
const item = require('./Routes/items');
const bird = require('./Routes/birds');

//then give a route to application from which it will be used
app.use('/api', item);
app.use('/filler' , bird);
//now whenever i will write like -> 
// -> /api/  : home page
// -> /api/items  : item ki post req hit
// -> /api/items/:id  : item ki put req hit

// now checking in postman , is mine every request working or not 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
