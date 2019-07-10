const router = require("express").Router()
const foundController = require("../../controllers/foundController")

//api/found
router.route("/")
  .get(foundController.findAll)  
  .post(foundController.create)

//api/found/:id
router.route("/:id")
  .put(foundController.update)
  .delete(foundController.delete)

//api/found/:search
router.route("/:search")
  .get(foundController.findByKeyword)

module.exports = router