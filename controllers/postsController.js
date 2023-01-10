const PostMessage = require('../models/postModel.js');
const mongoose = require('mongoose');

// posts
const getPosts = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find({});
        // console.log(postMessages);
        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const createPost = async (req,res)=>{
    // post req has body
    const post = req.body;
    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({ message: error.message});
    }
}


const updatePost = async(req,res) =>{
    const {id: _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Id did not match with any post");
    }        
    const updatedPost =  await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true});
    
    // send the updated post
    res.json(updatedPost);
}

const deletePost  = async (req,res)=>{
    const {id} = req.params;

    // valid id of post to be deleted
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("Post with the id doesnt exist!");
    }
     await PostMessage.findByIdAndRemove(id); // delete the object
     res.json({message : `Post ${id} has been deleted succesfully!`});
}


const likePost = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("Post with the id doesnt exist!");
    }
    const post = await PostMessage.findById(id);
    // like++
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount+1}, {new:true});
    res.json(updatePost);
}


module.exports = {getPosts , createPost, updatePost, deletePost, likePost}; // export destructured as route.get expects func, and not an obj
