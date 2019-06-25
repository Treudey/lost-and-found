const db = require("../models")

module.exports = {
  //Find All Found Items, sort descending by date
  findAll: function (req, res) {
    db.Found
      .find()
      .sort("-date")
      .then(dbFound => res.json(dbFound))
      .catch(err => res.status(422).json(err));
  },
  //Find by keyword - not sure what the field name is. Must be verified.
  findByKeyword: function (req, res) {
    db.Found
      .find(req.body.keyword)
      .sort("-date")
      .then(dbFound => res.json(dbFound))
      .catch(err => res.status(422).json(err));
  },
  //Create new
  create: function (req, res) {
    db.Found
      .create(req.body)
      .then(dbFound => res.json(dbFound))
      .catch(err => res.status(422).json(err));
  },
  //Update entry
  update: function (req, res) {
    db.Found
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbFound => res.json(dbFound))
      .catch(err => res.status(422).json(err));
  },
  //Delete entry
  delete: function (req, res) {
    db.Found
      .deleteOne({ _id: req.params.id })
      .then(dbFound => res.json(dbFound))
      .catch(err => res.status(422).json(err));
  }
}