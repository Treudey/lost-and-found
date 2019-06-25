const db = require("../models")

module.exports = {
  //Find user by ID
  findById: function (req, res) {
    db.User
      .findOne({ _id: req.params.id })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  //Create new
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  //Update entry
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  //Delete entry
  delete: function (req, res) {
    db.User
      .deleteOne({ _id: req.params.id })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
}