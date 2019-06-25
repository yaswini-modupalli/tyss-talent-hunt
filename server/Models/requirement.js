const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requirementSchema = new Schema({
    client : {
        type : String,
        required : true
    },
    stack : {
        type : String,
        required : true
    },
    experience : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    positions : {
        type : Number,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    closeDate : {
        type : Date
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('requirement', requirementSchema);