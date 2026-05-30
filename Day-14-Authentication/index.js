const express = require("express")

const dotenv = require("dotenv")

const cors = require("cors")

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(
    "/api",
    require("./routes/authRoutes")
)

app.listen(

    process.env.PORT,

    () => {

        console.log(

            `Server Running On Port ${process.env.PORT}`

        )

    }

)   