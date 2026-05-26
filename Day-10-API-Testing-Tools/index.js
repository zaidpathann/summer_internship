const express = require("express")

const fs = require("fs")

const app = express()

const PORT = 5000

app.use(express.json())

// GET API

app.get("/students", (req, res) => {

   const data = fs.readFileSync(
      "./students.json",
      "utf-8"
   )

   const students = JSON.parse(data)

   res.json(students)

})

// POST API

app.post("/add-student", (req, res) => {

   const newStudent = req.body

   const data = fs.readFileSync(
      "./students.json",
      "utf-8"
   )

   const students = JSON.parse(data)

   students.push(newStudent)

   fs.writeFileSync(
      "./students.json",
      JSON.stringify(students, null, 2)
   )

   res.json({

      message:
      "Student Added Successfully",

      student: newStudent

   })

})

app.listen(PORT, () => {

   console.log(
      `Server Running On Port ${PORT}`
   )

})