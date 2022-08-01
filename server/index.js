// we bring in/import all the necessary modules we need
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// import our express router
const postRoutes = require('./routes/posts.js');

// init express app
const app = express(); 

// set routing path inside posts.js with prefix posts i.e., PORT/posts/
app.use('/posts', postRoutes);

// gen setup so that it can send requests properly
// middleware
app.use(bodyParser.json({limit:'30mb',extended:true})); // images that are going to be send have limit 30mb
app.use(bodyParser.urlencoded({limit:'30mb',extended:true})); 
app.use(cors());

// db connection url
const CONN_URL = "mongodb+srv://suman373:mongodbsuman373@cluster0.o3wpm.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// function to connect with db : 3params : url, obj (2options), returns a promise
mongoose.connect(CONN_URL , { useNewUrlParser:true , useUnifiedTopology :true})
    .then(()=> app.listen(PORT,()=> console.log(`Server succesfully running on port ${PORT}`)))// when conn is established
    .catch((err)=> console.log(`Error is ${err.msg}`)) // error

// mongoose.set('useFindAndModify', false);