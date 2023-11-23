require('dotenv').config()

const express = require('express')

// express application
const app = express()

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT)
})