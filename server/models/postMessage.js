// import modules
const mongoose = require('mongoose');

// uniformity to each posts through schema, which is set as an object
const postSchema = mongoose.Schema({
    title: String,
    description : String,
    creator : String,
    tags: [String],
    selectedFile : String,
    likeCount : {
        type:Number,
        default : 0
    },
    createdAt : {
        type: Date,
        default: new Date()
    }
});


const PostMessage = mongoose.model('PostMessage', postSchema); // this is a mongoose model on which we can perform actions like create, read, update and delete

module.exports = PostMessage; // gets exported from the postMessage file