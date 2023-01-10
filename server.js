const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const postRoutes = require('./routes/postsRoute.js');
const path = require('path');

// init express app
const app = express();

// middleware
app.use(bodyParser.json({ limit: '30mb', extended: true })); // images that are going to be send have limit 30mb
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send("Welcome to the api"));
// route to the posts
app.use('/posts', postRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}



const PORT = process.env.PORT || 5000;

const connectionToDB = async()=>{
    try {
        const connection = await mongoose.connect(
            process.env.DB_CONNECTION_URI,{
                useUnifiedTopology:true,
                useNewUrlParser:true,
            }
        ).then(()=> console.log(`Database is connected successfully`))
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectionToDB();

app.listen(process.env.PORT, console.log(`Server is running on ${process.env.PORT}`));