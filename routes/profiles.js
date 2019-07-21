const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Profile = require('../models/Profile');

//GET api/profiles
//Get all users profiles
//Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().sort({
      date: -1
    });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//GET api/profiles/user
//Get all users profiles
//Private
router.get('/user', auth, async (req, res) => {
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

    req.body.foundPhoneNumber = parseInt(req.body.foundPhoneNumber);

    try {
      const newProfile = new Profile({
        ...req.body,
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
  const {foundTitle, foundPhoneNumber, foundDate, foundColor, foundLocation, foundDescription, foundImage } = req.body;

  // Build profile object
  const profileFields = {};
  if (foundTitle) profileFields.foundTitle = foundTitle;
  if (foundPhoneNumber) profileFields.foundPhoneNumber = parseInt(foundPhoneNumber);
  if (foundDate) profileFields.foundDate = foundDate;
  if (foundColor) profileFields.foundColor = foundColor;
  if (foundLocation) profileFields.foundLocation = foundLocation;
  if (foundDescription) profileFields.foundDescription = foundDescription;
  if (foundImage) profileFields.foundImage = foundImage;

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
