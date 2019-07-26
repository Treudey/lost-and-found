const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Item = require('../models/Item');

//GET api/items
//Get all users items
//Private
router.get('/', auth, async (req, res) => {
  try {
    const items = await Item.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST api/items
// Add new item
// Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, type,location,description } = req.body;

    try {
      const newItem = new Item({
        name,
        email,
        type,
        location,
        description,
        user: req.user.id
      });

      const item = await newItem.save();

      res.json(item);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

// PUT api/items/:id
// Update item
// Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, type,location,description } = req.body;

  // Build item object
  const itemFields = {};
  if (name) itemFields.name = name;
  if (email) itemFields.email = email;
  if (type) itemFields.type = type;
  if (location) itemFields.location = location;
  if (description) itemFields.description = description;

  try {
    let item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: 'item not found' });

    // each user with their own item
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: itemFields },
      { new: true }
    );

    res.json(item);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

//DELETE api/items/:id
// Delete item
// Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: ' not found' });

    // Make sure user owns item
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Item.findByIdAndRemove(req.params.id);

    res.json({ msg: ' deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
