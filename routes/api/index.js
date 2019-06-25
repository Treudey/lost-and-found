const router = require("express").Router()
const foundRoutes = require("./found")
const foundRoutes = require("./user")

// Book routes
router.use("/found", foundRoutes)
router.use("/user", userRoutes)

module.exports = router;