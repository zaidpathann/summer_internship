const express = require("express")

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const verifyToken =
    require("../middleware/authMiddleware")

const router = express.Router()

// Hash Password Route

router.get("/hash/:password",

    async (req, res) => {

        const password =
            req.params.password

        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            )

        res.json({

            originalPassword:
                password,

            hashedPassword

        })

    }
)

// Generate JWT Token

router.get("/token/:username",

    (req, res) => {

        const username =
            req.params.username

        const token =
            jwt.sign(

                { username },

                process.env.JWT_SECRET,

                { expiresIn: "1h" }

            )

        res.json({

            username,

            token

        })

    }
)

// Protected Route

router.get(

    "/profile",

    verifyToken,

    (req, res) => {

        res.json({

            message:
                "Protected Route Accessed",

            user:
                req.user

        })

    }

)

module.exports = router