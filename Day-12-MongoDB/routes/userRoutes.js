const express = require("express")

const router = express.Router()

const {

   addUser,
   getUsers

} = require("../controllers/userController")

router.post("/add-user", addUser)

router.get("/get-users", getUsers)

module.exports = router