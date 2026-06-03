const express = require("express")

const router = express.Router()

const students =
require("../data/students")

router.get(

"/students",

(req,res)=>{

res.json({

success:true,

total:

students.length,

data:

students

})

}

)

router.get(

"/students/:id",

(req,res)=>{

const student =

students.find(

s=>

s.id===

Number(

req.params.id

)

)

if(!student){

return res.status(404)

.json({

message:

"Student Not Found"

})

}

res.json(student)

}

)

module.exports=

router