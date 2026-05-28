const User = require("../models/userModel")

// ADD USER

const addUser = async (req, res) => {

   try{

      const user = await User.create({

         name:req.body.name,

         email:req.body.email

      })

      res.json({

         message:"User Added Successfully",

         user

      })

   }
   catch(error){

      res.json({

         message:"Error Adding User",

         error

      })

   }

}

// GET USERS

const getUsers = async (req, res) => {

   try{

      const users = await User.find()

      res.json(users)

   }
   catch(error){

      res.json({

         message:"Error Fetching Users",

         error

      })

   }

}

module.exports = {

   addUser,
   getUsers

}