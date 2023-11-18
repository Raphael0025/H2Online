require('dotenv').config()

const express = require('express')

// express application
const app = express()

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})