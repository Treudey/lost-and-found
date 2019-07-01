const router = require("express").Router()
const foundRoutes = require("./found")
const userRoutes = require("../Users")

// Book routes
router.use("/found", foundRoutes)
router.use("/user", userRoutes)

module.exports = router;