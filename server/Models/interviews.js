const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    cname : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    sdate : {
        type : Date,
        required : true
    },
    stack : {
        type : String,
        required : true
    },
    contactNo : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    currOrg : {
        type : String
    },
    totalExp : {
        type : String
    },
    relevantExp : {
        type : String
    },
    relocate : {
        type : String,
        required : true
    },
    cctc : {
        type : String
    },
    ectc : {
        type : String
    },
    noticePeriod : {
        type : String
    },
    location : {
        type : String,
        required : true
    },
    interviewPanel : {
        type : String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('interview', interviewSchema);