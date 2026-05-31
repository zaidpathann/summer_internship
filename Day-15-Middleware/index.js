const express = require("express")

const dotenv = require("dotenv")

dotenv.config()

const app = express()

app.use(

    "/api",

    require("./routes/userRoutes")

)

app.listen(

    process.env.PORT,

    () => {

        console.log(

            `Server Running On Port ${process.env.PORT}`

        )

    }

)