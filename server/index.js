// we bring in/import all the necessary modules we need
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// import our post router
const postRoutes = require('./routes/posts.js');
const BASE_URL =  process.env.DB_CONNECTION_URL;

// init express app
const app = express(); 


// gen setup so that it can send requests properly
// middleware
app.use(bodyParser.json({limit:'30mb',extended:true})); // images that are going to be send have limit 30mb
app.use(bodyParser.urlencoded({limit:'30mb',extended:true})); 
app.use(cors());
// route to the posts
app.use('/posts', postRoutes);
app.get('/', (req,res)=> res.send("Welcome to the api"));

const PORT = process.env.PORT || 5000;

// function to connect with db : 3params : url, obj (2options), returns a promise
mongoose.connect(BASE_URL, { useNewUrlParser:true , useUnifiedTopology :true})
    .then(()=> app.listen(PORT,()=> console.log(`Db connected Server succesfully running on port ${PORT}`)))// when conn is established
    .catch((error)=> console.log(`Error is ${error.message}`)) // error
