const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Profile = require('../models/Profile');

//GET api/profiles
//Get all users profiles
//Private
router.get('/', auth, async (req, res) => {
  try {
    const profiles = await Profile.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST api/profiles
// Add new profile
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
      const newProfile = new Profile({
        name,
        email,
        type,
        location,
        description,
        user: req.user.id
      });

      const profile = await newProfile.save();

      res.json(profile);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

// PUT api/profiles/:id
// Update profile
// Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, type,location,description } = req.body;

  // Build profile object
  const profileFields = {};
  if (name) profileFields.name = name;
  if (email) profileFields.email = email;
  if (type) profileFields.type = type;
  if (location) profileFields.location = location;
  if (description) profileFields.description = description;

  try {
    let profile = await Profile.findById(req.params.id);

    if (!profile) return res.status(404).json({ msg: 'profile not found' });

    // each user with their own profile
    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $set: profileFields },
      { new: true }
    );

    res.json(profile);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

//DELETE api/profiles/:id
// Delete profile
// Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let profile = await Profile.findById(req.params.id);

    if (!profile) return res.status(404).json({ msg: ' not found' });

    // Make sure user owns profile
    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Profile.findByIdAndRemove(req.params.id);

    res.json({ msg: ' deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
