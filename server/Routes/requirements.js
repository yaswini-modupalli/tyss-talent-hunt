const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// load mongoose
require('../Models/requirement');
const requirementSchema = mongoose.model('requirement');

router.get('/api', (req, res) => {
    requirementSchema.find().sort({date: 'desc'}).then(data => {
        res.json(data);
    });
});

//post method
router.post('/add/api', (req,res)=>{
    const requirement = new requirementSchema({
        client : req.body.client,
        stack : req.body.stack,
        experience : req.body.experience,
        location : req.body.location,
        positions : req.body.positions,
        designation : req.body.designation,
        description : req.body.description,
        closeDate : req.body.closeDate
    });
    requirement.save().then(data=>{
        console.log('successfully created', data);
        res.send(data);
    });
});

//edit post
router.get('/api/:id',(req,res)=>{
    requirementSchema.findOne({_id:req.params.id}).then(requirement =>{
        res.json(requirement);
    })
});

router.put('/api/edit/:id',(req,res)=>{
    requirementSchema.findOne({_id:req.params.id}).then(oneRequirement=>{
        oneRequirement.client = req.body.client;
        oneRequirement.stack = req.body.stack;
        oneRequirement.experience = req.body.experience;
        oneRequirement.location = req.body.location;
        oneRequirement.positions = req.body.positions;
        oneRequirement.designation = req.body.designation;
        oneRequirement.description = req.body.description;
        oneRequirement.closeDate = req.body.closeDate;
        oneRequirement.save().then(editedRequirement =>{
        res.json(editedRequirement)
        }).catch(err=>console.log(err))
    }); 
});

router.delete('/api/:id',(req,res)=>{
    requirementSchema.deleteOne({ _id : req.params.id }).then(data => {
        res.json(data);
    });
});  

module.exports = router;