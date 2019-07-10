const express = require('express');
const router = express.Router();
const Lost = require('../models/Lost');


//GET api/lost
//Find All Losy Items; descending by date
//Public /*findAll
router.get('/', async (req, res) =>{
  try{
    const losts =await Lost.find().sort({date:-1})
    res.json(losts)
  }catch(error){
    console.log(error.message)
    res.status(422).json(err)
  }

})
  
/***** not sure about this part (pj)
 * 
  //Find by keyword search- not sure what the field name is. Must be verified.
  //Implement text search and index material that is posted in db for searching purposes?
  findByKeyword: function (req, res) {
    db.Lost
      //No clue if this will work
      .find({
        "search": {
          $regex: req.query.search,
          $option: "i"
        }
      })
      .sort("-date")
      .then(dbLost => res.json(dbLost))
      .catch(err => res.status(422).json(err));
  },
*/

//POST api/lost
//Create new lost item data
//public

router.post('/', async (req,res)=>{
  const {items,title,contact,color,location,description,image,date} = req.body;

  try{
    newLost =new Lost ({
      items,
      title,
      contact,
      color,
      location,
      description,
      image,
      date
    })
  
    const lost = await newLost.save()
    res.json(lost)
  } catch(error){
    console.log("catch data:")
    console.log(error)
    return res.status(422).json(err)
  }
}),


//PUT api/lost/:id
//Update entry
//public
router.put('/',async (req,res)=>{
  const {items,title,contact,color,location,description,image,date} = req.body;

  // Build lost object
  const lostFields = {};
  if (items) profileFields.items = items;
  if (title) profileFields.title = title;
  if (contact) profileFields.contact = contact;
  if (color) profileFields.color = color;
  if (location) profileFields.location = location;
  if (description) profileFields.description = description;
  if (image) profileFields.image = image;
  if (date) profileFields.date = date;

  try {
    let lost = await Lost.findById(req.params.id);

    if(!lost) return res.status(404).json({ msg: 'item not found' });

    lost =await Lost.findByIdAndUpdate(
      req.params.id,
      {$set:lostFields},
      {new:true}
    );
    res.json(lost)
  } catch (error) {
    console.error(error.message);
    res.status(422).json(error)
  }
})

//DELETE api/lost/:id
//Delete entry
//Public

router.delete('/:id',async(req,res)=>{
  try{
    let lost = await Lost.findById(req.params.id)

    if(!lost) return res.status(404).json({ msg: ' not found' });

    await Lost.findByIdAndRemove(req.params.id)
    res.json({msg:'item deleted'})
  }catch(error){
    console.error(error.message);
      res.status(422).json(error)
  }
})

module.exports = router;