const express = require("express")

const cors = require("cors")

const app = express()

app.use(cors())

const PORT = 5000

app.get("/calculate/:choice/:num1/:num2", (req, res) => {

   const choice = Number(req.params.choice)

   const num1 = Number(req.params.num1)

   const num2 = Number(req.params.num2)

   let result

   let operation

   switch(choice){

      case 1:

         result = num1 + num2
         operation = "Addition"

         break

      case 2:

         result = num1 - num2
         operation = "Subtraction"

         break

      case 3:

         result = num1 * num2
         operation = "Multiplication"

         break

      case 4:

         result = num1 / num2
         operation = "Division"

         break

      default:

         return res.json({

            message: "Invalid Choice"

         })

   }

   res.json({

      operation,
      num1,
      num2,
      result

   })

})

app.listen(PORT, () => {

   console.log(
      `Server Running On Port ${PORT}`
   )

})