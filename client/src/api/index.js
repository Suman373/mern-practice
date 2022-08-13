//  make api calls
import axios from 'axios';

const url = 'http://localhost:5000/posts';

// get req for posts
export const fetchPosts = () => axios.get(url);


// post req for creating post
export const createPost =(newPost)=> axios.post(url, newPost);

// patch req for update post
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost);

// delete req for delete post
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// patch req for like post
export const likePost = (id,updatedPost) => axios.patch(`${url}/${id}/likePost`,updatedPost);