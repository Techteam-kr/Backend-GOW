const express = require('express');

const app = express();

app.use(express.json())

const categoryRouter = require('./routers/category')
app.use('/category', categoryRouter)

const filteredYojanas = require('./routers/filteredYojanas')
app.use('/filteredYojanas', filteredYojanas)

const searchYojanas = require('./routers/searchYojanas')
app.use('/searchYojanas' , searchYojanas)

const listofYojanas = require('./routers/listofYojanas')
app.use('/listofYojanas', listofYojanas)



app.listen(9001, () => {
    console.log("Server Started on port 9001")
})