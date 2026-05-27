const express = require("express")

const router = express.Router()

const {
   addNumbers,
   subNumbers
} = require("../controllers/mathController")

router.get("/add", addNumbers)

router.get("/sub", subNumbers)

module.exports = router