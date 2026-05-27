const express = require("express")

const app = express()

const mathRoutes = require("./routes/mathRoutes")

const PORT = 5000

app.use("/", mathRoutes)

app.listen(PORT, () => {

   console.log(
      `Server Running On Port ${PORT}`
   )

})