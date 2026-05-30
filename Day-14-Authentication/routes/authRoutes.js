const express = require("express")

const router = express.Router()

const {

    registerUser,
    loginUser

} = require(
    "../controllers/authController"
)

const verifyToken =
    require(
        "../middleware/authMiddleware"
    )

router.post(
    "/register",
    registerUser
)

router.post(
    "/login",
    loginUser
)

router.get(
    "/profile",
    verifyToken,
    (req, res) => {

        res.json({

            message:
                "Protected Profile Route",

            user:
                req.user

        })

    }
)

module.exports = router