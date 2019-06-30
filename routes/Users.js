const express = require("express")
users = express.Router(),
cors = require('cors'),
jwt = require('jsonwebtoken'),
bcrypt = require('bcrypt');

const User = require ('../models/User')

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register',(req,res)=>{
  const today = new Date()
  const userData = {
    username: req.body.username,
    email : req.body.email,
    password:req.body.password,
    created:today  
  }

  User.findOne({
    email:req.body.email
  })
  .then(user=>{
    if(!user){
      bcrypt.hash(req.body.password,10,(err,hash)=>{
        userData.password = hash
        User.create(userData)
        .then(user=>{
          res.json({status:user.email + 'registed!'})
        })
        .catch(err=>{
          res.send("error1:" + err)
        })
      })
    }else{
      res.json({err:'User already exists'})
    }
  })
  .catch(err=>{
    res.send('err2' + err)
  })
})

users.post('/login',(req,res)=>{
  User.findOne({
    email:req.body.email
  })
  .then(user=>{
    if(user){
      if(bcrypt.compareSync(req.body.password,user.password)){
        const payload = {
          _id:user._id,
          username:user.username,
          email:user.email,
        }
        let token = jwt.sign(payload,process.env.SECRET_KEY,{
          expiresIn:2000
        })
        res.send(token)
      }else{
        res.json({err:"User does not exist"})
      }
    }else{
      res.send({err:"User does not exist"})
    }
  })
  .catch(err=>{
    res.send('error3:' + err)
  })
})

users.get("/profile",(req,res)=>{
  const decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

  User.findOne({
    _id:decoded._id
  })
  .then(user=>{
    if(user){
      res.json(user)
    }else{
      res.send('User does not exist')
    }
  })
  .catch(err=>{
    res.send('err4: '+ err)
  })
  
})

module.exports = users