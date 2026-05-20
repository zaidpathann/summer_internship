const express = require("express")

const cors = require("cors")

const app = express()

app.use(cors())

const PORT = 5000

app.get("/api/data", (req, res) => {

   res.json({

      message: "Server Connected Successfully",

      status: "Active",

      framework: "Express JS"

   })

})

app.listen(PORT, () => {

   console.log(
      `Server Running On Port ${PORT}`
   )

})