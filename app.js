require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
// const mongoDBSession = require('connect-mongodb-session')
const passport = require('passport')

const routesController = require('./controllers/routes')

const app = express()
const port = process.env.PORT
const dbURL = process.env.MONGODB_URL

app.use(routesController)




mongoose.connect(dbURL)
  .then(() => {
    console.log('successfully connected to mongodb')
  })
  .catch((err) => {
    console.log("error message", err)
  });

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

