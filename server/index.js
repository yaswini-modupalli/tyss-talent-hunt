const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const app =  express();

localMongo = 'mongodb://localhost:27017/recruit';
mongodbURL = 'mongodb+srv://raja:raja2129@recruit-szohz.mongodb.net/test?retryWrites=true&w=majority';

const requirementsRoute = require('./Routes/requirements');
const interviewsRoute = require('./Routes/interview');

//conecting to mongodb atlas
mongoose.connect(localMongo, { useNewUrlParser: true }, (err) => {
    if(err)throw err;
    else console.log('db successfully connected');
});

//cors middleware use here
app.use(cors());

//bodyparser middleware
app.use(bodyParser.urlencoded({extended:false}))
//parse application/json
app.use(bodyParser.json());
//overide with post having method delete
app.use(methodOverride('_method'));

app.use('/requirements',requirementsRoute);
app.use('/interviews',interviewsRoute);

const port = process.env.PORT || 2000;

app.listen(port , (err)=>{
    if(err)throw err;
    else{
        console.log(`app is running on ${port}`)
    }
});