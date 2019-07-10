const express = require('express')
const router = express.Router();
const lostController = require("../../controllers/lostController")

//api/lost
router.route("/")
  .get(lostController.findAll)  
  .post(lostController.create)

//api/lost/:id
router.route("/:id")
  .put(lostController.update)
  .delete(lostController.delete)

//api/lost/:search
router.route("/:search")
  .get(lostController.findByKeyword)



module.exports= router