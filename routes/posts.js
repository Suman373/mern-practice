// module imports
const express = require('express');

const router = express.Router(); // establishing router for routing 

// controllers
const {getPosts , createPost, updatePost, deletePost, likePost} = require('../controllers/posts.js');


// when user visits 
// e.g localhost:5000/posts --> every route starts with  /posts
router.get('/', getPosts); // logics in the controllers/posts.js

//  createPost
router.post('/', createPost);

// updatePost
router.patch('/:id', updatePost);

// deletePost
router.delete('/:id',deletePost);

// likePost
router.patch('/:id/likePost', likePost);

//export router 
module.exports = router; // alt: export default router; when using import export