//  controllers are for the logic part of our routes, to simplify the workflow and maintain a decent code structure

// model from mongoose
const PostMessage = require('../models/postMessage.js');

// posts
const getPosts = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find(); // await fot async cb
        console.log(postMessages);

        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const createPost = async (req,res)=>{

    // post req has body
    const post = req.body;

    // new post will pass the post to the parent method
    const newPost = new PostMessage(post);

    try{
        await newPost.save(); // new post saved success
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({ message: error.message});
    }
}





module.exports = {getPosts , createPost}; // export destructured as route.get expects func, and not an obj
