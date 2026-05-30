const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {

    const { username, password } = req.body

    const hashedPassword =
        await bcrypt.hash(password, 10)

    res.json({

        message: "User Registered",

        username,

        hashedPassword

    })

}

const loginUser = async (req, res) => {

    const { username } = req.body

    const token = jwt.sign(

        { username },

        process.env.JWT_SECRET,

        { expiresIn: "1h" }

    )

    res.json({

        message: "Login Successful",

        token

    })

}

module.exports = {

    registerUser,
    loginUser

}