const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.Database_url)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscriber_router = require('./routes/subscribers')

app.use('/subscribers', subscriber_router)

app.listen(3000, () => console.log('Server has started'))