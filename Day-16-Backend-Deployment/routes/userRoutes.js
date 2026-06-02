const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
res.send("Backend Live Successfully")
})

router.get("/about",(req,res)=>{
res.json({
    project:"Backend Deployment",
    status:"Running"
})
})

router.get("/user",(req,res)=>{
res.json({
    name:"Zaid",
    course:"MERN"
})
})

module.exports=router