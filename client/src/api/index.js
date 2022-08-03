//  make api calls
import axios from 'axios';

const url = 'http://localhost:5000/posts';

// get req for posts
export const fetchPosts = () => axios.get(url);


// post req for creating post
export const createPost =(newPost)=> axios.post(url, newPost);