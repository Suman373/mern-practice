//  make api calls

const axios = require('axios');

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

// module.exports = {fetchPosts};