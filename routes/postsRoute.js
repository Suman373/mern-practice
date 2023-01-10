// module imports
const express = require('express');

const router = express.Router();

const {getPosts , createPost, updatePost, deletePost, likePost} = require('../controllers/postsController.js');

router.get('/', getPosts); 

//  createPost
router.post('/', createPost);

// updatePost
router.patch('/:id', updatePost);

// deletePost
router.delete('/:id',deletePost);

// likePost
router.patch('/:id/likePost', likePost);

//export router 
module.exports = router;