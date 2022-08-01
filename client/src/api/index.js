//  make api calls

const axios = require('axios');

const url = 'https://localhost:5000/posts';

const fetchPosts = () => axios.get(url);

module.exports = fetchPosts;