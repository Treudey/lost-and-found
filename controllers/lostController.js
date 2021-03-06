const db = require("../models")

module.exports = {
  //Find All Lost Items, sort descending by date
  findAll: function (req, res) {
    db.Lost
      .find()
      .sort({ _id: -1 })
      .then(dbLost => res.json(dbLost))
      .catch(err => res.status(422).json(err)); 
  },
  //Find by keyword search- not sure what the field name is. Must be verified.
  //Implement text search and index material that is posted in db for searching purposes?
  findByKeyword: function (req, res) {
    db.Lost
    //No clue if this will work
      .find({"search": {$regex: req.query.search, $option: "i"}})
      .sort({ _id: -1 })
      .then(dbLost => res.json(dbLost))
      .catch(err => res.status(422).json(err));
  },
  //Create new
  create: function (req, res) {
    console.log("Lost Controller create: ",req.body);
    db.Lost
      .create(req.body)
      .then(dbLost => {
        console.log(dbLost)
        return res.json(dbLost)
      })
      .catch(err => {
        console.log("catch data:")
        console.log(err)
        return res.status(422).json(err)
      });
  },
  //Update entry
  update: function (req, res) {
    db.Lost
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbLost => res.json(dbLost))
      .catch(err => res.status(422).json(err));
  },
  //Delete entry
  delete: function (req, res) {
    db.Lost
      .deleteOne({ _id: req.params.id })
      .then(dbLost => res.json(dbLost))
      .catch(err => res.status(422).json(err));
  }
}