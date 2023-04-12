require('dotenv').config()

const express = require('express')
const router = express.Router()



router.get("/api/aquamate", (req, res) => {
  res.send("index page")
})



module.exports = router