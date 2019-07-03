const express = require('express')
const router = express.Router();

/**Lost Model */
const Lost = require('../../models/Lost')

router.get('/',(req,res)=>{
    Lost.find()
    .sort({date:-1})
    .then(losts =>res.json(losts))
})

router.post('/',(req,res)=>{
    const newLost = new Lost({
        location:req.body.location
    });

    newLost.save().then(lost => res.json(lost))

})

router.delete('/:id',(req,res)=>{
    Lost.findById(req.params.id)
    .then(item => item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
})



module.exports= router