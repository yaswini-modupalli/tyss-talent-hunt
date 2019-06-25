const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// load mongoose
require('../Models/interviews');
const interviewSchema = mongoose.model('interview');

//get data
router.get('/api', (req, res) => {
    interviewSchema.find().sort({date: 'desc'}).then(data => {
        res.json(data);
    });
});

//post method
router.post('/add/api', (req,res)=>{
    const interviews = new interviewSchema({
        cname : req.body.cname,
        gender : req.body.gender,
        sdate : req.body.sdate,
        stack : req.body.stack,
        contactNo : req.body.contactNo,
        email : req.body.email,
        currOrg : req.body.currOrg,
        totalExp : req.body.totalExp,
        relevantExp : req.body.relevantExp,
        relocate : req.body.relocate,
        cctc : req.body.cctc,
        ectc : req.body.ectc,
        noticePeriod : req.body.noticePeriod,
        location : req.body.location,
        interviewPanel : req.body.interviewPanel
    });
    interviews.save().then(data=>{
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
    interviewSchema.findOne({_id:req.params.id}).then(interview=>{
        interview.cname = req.body.cname;
        interview.gender = req.body.gender;
        interview.sdate = req.body.sdate;
        interview.stack = req.body.stack;
        interview.contactNo = req.body.contactNo;
        interview.email = req.body.email;
        interview.currOrg = req.body.currOrg;
        interview.totalExp = req.body.totalExp;
        interview.relevantExp = req.body.relevantExp;
        interview.relocate = req.body.relocate;
        interview.cctc = req.body.cctc;
        interview.ectc = req.body.ectc;
        interview.noticePeriod = req.body.noticePeriod;
        interview.location = req.body.location;
        interview.interviewPanel = req.body.interviewPanel;
        interview.save().then(editedInterview =>{
        res.json(editedInterview)
        }).catch(err=>console.log(err));
    }); 
});

//delete data
router.delete('/api/:id',(req,res)=>{
    interviewSchema.deleteOne({ _id : req.params.id }).then(data => {
        res.json(data);
    });
});  

module.exports = router;
