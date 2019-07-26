const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const auth = require('../middleware/auth');

const User = require('../models/User');

// POST api/users
// Regiter a user
// Public
router.post(
  '/',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }  
);

//Get api/users
//Get User info
//Private

router.get('/',auth,async(req,res)=>{
  try{
    const user = await User.findById(req.user.id)
    res.json(user)
  }catch(err){
    console.error(err.message);
    res.status(500).send('server Error')
  }
})

//PUT api/users
//update user
//Private
router.put('/', auth, async(req,res)=>{
  const {name,email} = req.body;

  const profileFields={};
  if(name) profileFields.name= name;
  if(email) profileFields.email = email 
  
  try{
    let user = await User.findById(req.user.id)
    // let user = await User.findOne({ email });
    console.log(user)

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: profileFields },
      {new:true}
    )
    res.json(user);
    console.log('new info:'+ user)
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error, cannot update profile')
  }
})

module.exports = router;
