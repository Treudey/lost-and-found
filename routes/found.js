const express = require('express');
const router = express.Router();
const Found = require('../models/Found');

 
  //GET api/found
  //Find All Found Items descending by date
  //Public /*findAll
  router.get('/',async(req,res)=>{
    try {
      const founds = await Found.find().sort({date:-1})
      res.json(founds)
    } catch (error) {
      console.log(err.message);
      res.status(422).json(err)
      
    }
  })
 
  //Find by keyword search- not sure what the field name is. Must be verified.
  //Implement text search and index material that is posted in db for searching purposes?
  
  /*
  findByKeyword: function (req, res) {
    db.Found
    //No clue if this will work
      .find({"search": {$regex: req.query.search, $option: "i"}})
      .sort("-date")
      .then(dbFound => res.json(dbFound))
      .catch(err => res.status(422).json(err));
  },
*/

  //POST api/found
  //Create new item data
  //Public
  router.post('/',

    async (req, res) =>{
      // console.log("Found Controller create: ",req.body);
      const {items,title,contact,color,location,description,image,date} = req.body;

      try {
        const newFound = new Found ({
          items,
          title,
          contact,
          color,
          location,
          description,
          image,
          date
        })

        const found = await newFound.save()

        res.json(found)
        
      } catch (error) {
        console.error(err.message);
        res.status(422).json(err);
      }
    }),

  //Put api/found/:id
  //Update entry
  //public
  router.put('/:id', async (req,res)=>{
    const {items,title,contact,color,location,description,image,date} = req.body;

    // Build profile object
    const foundFields = {};
    if (items) profileFields.items = items;
    if (title) profileFields.title = title;
    if (contact) profileFields.contact = contact;
    if (color) profileFields.color = color;
    if (location) profileFields.location = location;
    if (description) profileFields.description = description;
    if (image) profileFields.image = image;
    if (date) profileFields.date = date;

    try {
      let found = await Found.findById(req.params.id);

      if(!found) return res.status(404).json({ msg: 'item not found' });

      found =await Found.findByIdAndUpdate(
        req.params.id,
        {$set:foundFields},
        {new:true}
      );
      res.json(found)
    } catch (error) {
      console.error(err.message);
      res.status(422).json(err)
    }

  })

  //Delete api/found/:id
  //Delete entry
  //public

  router.delete('/:id',async (req,res)=>{
    try{
      let found = await Found.findById(req.params.id);

      if(!found) return res.status(404).json({ msg: ' not found' });

      await Found.findByIdAndRemove(req.params.id)

      res.json({ msg: ' deleted' });

    }catch(error){
      console.error(err.message);
      res.status(422).json(err)
    }

  })

module.exports = router;